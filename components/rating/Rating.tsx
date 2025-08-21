"use client";

import { useState, useEffect } from "react";
import { content } from "@/config/content";
import { generateRatingSchema } from "@/app/schema";

export function Rating() {
  const [rating, setRating] = useState<number>(content.rating.initialRating);
  const [userRating, setUserRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const calculateInitialVotes = () => {
    const baseVotes = 146;
    const startDate = new Date('2025-04-20').getTime(); // 改回原来的日期
    const today = new Date().getTime();
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    if (daysDiff < 0) return baseVotes;

    // 使用日期作为种子来生成确定性的"随机"值
    const seed = daysDiff + (new Date().getMonth() * 100);
    const pseudoRandom = Math.sin(seed) * 10000;
    const randomValue = (pseudoRandom - Math.floor(pseudoRandom)) * 0.1 + 0.95; // 0.95-1.05范围

    const growthFactor = Math.log1p(daysDiff) * 1.5;
    const baseIncrease = Math.floor(growthFactor * 50);
    const variation = baseIncrease * randomValue;

    const dayOfWeek = new Date().getDay();
    const weekendMultiplier = (dayOfWeek === 0 || dayOfWeek === 6) ? 1.2 : 1;

    return Math.max(baseVotes, Math.floor(baseVotes + variation * weekendMultiplier));
  };

  const initialCalculatedVotes = calculateInitialVotes();
  const [votes, setVotes] = useState<number>(initialCalculatedVotes);

  useEffect(() => {
    // 读取所有保存的状态
    const savedHasVoted = localStorage.getItem('hasVoted') === 'true';
    const savedUserRating = localStorage.getItem('userRating');
    const savedGlobalRating = localStorage.getItem('globalRating');

    // 只有在用户已投票的情况下才设置用户评分
    if (savedHasVoted) {
      setHasVoted(true);
      if (savedUserRating) {
        setUserRating(parseInt(savedUserRating));
      }

      // 如果有保存的全局评分，使用它；否则使用初始评分
      if (savedGlobalRating) {
        setRating(parseFloat(savedGlobalRating));
      }

      // 不再从localStorage读取总票数，而是使用计算的值
      // 这样票数会随时间增长
    }

    // 无论用户是否投票，总是使用计算出的初始票数
    // 如果用户已投票，则在计算的基础上加1
    setVotes(savedHasVoted ? initialCalculatedVotes + 1 : initialCalculatedVotes);
  }, [initialCalculatedVotes]);

  const handleVote = (star: number) => {
    if (!hasVoted) {
      setUserRating(star);
      setHasVoted(true);
      const newTotalVotes = votes + 1;
      const newRating = ((rating * votes) + star) / newTotalVotes;
      const finalRating = Number(newRating.toFixed(1));

      setRating(finalRating);
      setVotes(newTotalVotes);

      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('userRating', star.toString());
      localStorage.setItem('globalRating', finalRating.toString());
      localStorage.setItem('totalVotes', newTotalVotes.toString());
    }
  };

  // 添加重置功能
  const handleReset = () => {
    localStorage.removeItem('hasVoted');
    localStorage.removeItem('userRating');
    localStorage.removeItem('globalRating');
    localStorage.removeItem('totalVotes');
    setHasVoted(false);
    setUserRating(0);
    setRating(content.rating.initialRating);
    setVotes(146); // 使用基础票数
  };

  return (
    <section className="mb-16" id="rating">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRatingSchema(rating, votes))
        }}
      />

      <div className="container mx-auto">
        {/* 星球主题的评分标题区域 */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-xl p-8 mb-8 overflow-hidden">
          {/* 星空背景效果 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-12 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-8 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-4 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-8 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-12 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center text-white mb-2 drop-shadow-lg">
              🌟 {content.rating.title} 🌟
            </h2>
            <p className="text-center text-purple-200 text-lg">
              Join thousands of cosmic explorers in rating this stellar adventure!
            </p>
          </div>
          
          {/* 开发环境重置按钮 */}
          <div className="absolute top-2 right-2">
            <button
              onClick={handleReset}
              className="text-xs text-purple-300 hover:text-white transition-colors"
              style={{ display: process.env.NODE_ENV === 'development' ? 'block' : 'none' }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* 评分区域 */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 shadow-2xl border border-purple-100">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* 星星评分 */}
            <div className="flex items-center space-x-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleVote(star)}
                  disabled={hasVoted}
                  className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 ${
                    (hasVoted && star <= userRating) || (!hasVoted && star <= userRating)
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg scale-105'
                      : hasVoted
                      ? 'bg-gray-200 cursor-not-allowed opacity-60'
                      : 'bg-gradient-to-r from-gray-200 to-gray-300 hover:from-yellow-200 hover:to-yellow-300 cursor-pointer shadow-md'
                  }`}
                  aria-label={`Rate ${star} stars`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              ))}
            </div>
            
            {/* 评分显示 */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  {rating}
                </span>
                <div className="text-yellow-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-slate-600 text-lg">
                <span className="font-bold text-2xl text-purple-700">{votes.toLocaleString()}</span>
                <span className="ml-2 text-slate-500">cosmic explorers have rated this game</span>
              </div>
              {hasVoted && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-medium">
                    🚀 Thank you for rating Planet Clicker! Your feedback helps other space explorers discover this cosmic adventure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









