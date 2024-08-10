"use client";
import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full ">
      <div
        className="p-3 flex justify-between items-center font-bold border-gray-500"
        style={{ boxShadow: "0px 0px 2px  #2e2e2e" }}
      >
        <a href="/">
          <Image src="/sj-main.svg" alt="SEOJIN LOGO" width={50} height={50} />
        </a>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden pr-2 text-gray-600">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-[25px]" />
          </button>
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:flex space-x-10 text-[1.1rem]">
          <NavigationMenu.List className="pr-12 flex space-x-20">
            {/* 회사소개 */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-gray-300 cursor-pointer">
                회사소개
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-white text-gray-800 rounded shadow-lg absolute flex flex-col min-w-[150px]">
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/company/history">회사 연혁</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/company/team">팀 소개</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/company/mission">미션</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* 사업영역 */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-gray-300 cursor-pointer">
                사업영역
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-white text-gray-800 rounded shadow-lg absolute flex flex-col min-w-[150px]">
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/services/design">디자인</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/services/development">개발</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/services/marketing">마케팅</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* 사업실적 */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-gray-300 cursor-pointer">
                사업실적
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-white text-gray-800 rounded shadow-lg absolute flex flex-col min-w-[150px]">
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/portfolio/projects">프로젝트</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/portfolio/testimonials">고객 평가</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link className="hover:bg-gray-300 p-1" asChild>
                  <Link href="/portfolio/case-studies">케이스 스터디</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* 고객센터 */}
            <NavigationMenu.Item>
              <NavigationMenu.Link className=" p-1" asChild>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 cursor-pointer"
                >
                  고객센터
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <NavigationMenu.Root className="md:hidden mt-2">
          <NavigationMenu.List className="flex flex-col space-y-2 ">
            <NavigationMenu.Item className=" hover:bg-gray-300 text-center cursor-pointer">
              <NavigationMenu.Link className="p-1" asChild>
                <Link href="/" onClick={toggleMenu}>
                  회사소개
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className=" hover:bg-gray-300 text-center cursor-pointer">
              <NavigationMenu.Link className=" p-1" asChild>
                <Link href="/about" onClick={toggleMenu}>
                  사업영역
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className=" hover:bg-gray-300 text-center cursor-pointer">
              <NavigationMenu.Link className="p-1" asChild>
                <Link href="/portfolio" onClick={toggleMenu}>
                  사업실적
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className=" hover:bg-gray-300 text-center cursor-pointer">
              <NavigationMenu.Link className="p-1" asChild>
                <Link href="/contact" onClick={toggleMenu}>
                  고객센터
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      )}
    </header>
  );
};

export default Header;
