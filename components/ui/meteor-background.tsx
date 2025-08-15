"use client";

import React, { useEffect, useState } from "react";

interface Meteor {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function MeteorBackground() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  
  useEffect(() => {
    // 初始化流星
    const initialMeteors = Array.from({ length: 20 }, (_, i) => createMeteor(i));
    setMeteors(initialMeteors);
    
    // 定期添加新的流星
    const interval = setInterval(() => {
      setMeteors(prev => {
        // 移除一个旧的流星，添加一个新的
        const newMeteors = [...prev];
        const removeIndex = Math.floor(Math.random() * newMeteors.length);
        newMeteors[removeIndex] = createMeteor(removeIndex);
        return newMeteors;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // 创建一个新的流星对象
  const createMeteor = (id: number): Meteor => {
    return {
      id,
      top: Math.random() * 40, // 流星从页面顶部0-40%的位置开始
      left: Math.random() * 100, // 水平位置随机
      size: Math.random() * 2 + 0.5, // 流星大小0.5-2.5
      opacity: Math.random() * 0.6 + 0.4, // 透明度0.4-1
      duration: Math.random() * 4 + 2, // 动画持续时间2-6秒
      delay: Math.random() * 5, // 延迟0-5秒开始
    };
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute bg-white rounded-full meteor"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size * 80}px`, // 流星尾巴长度
            opacity: meteor.opacity,
            transform: "rotate(45deg)",
            animation: `meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

