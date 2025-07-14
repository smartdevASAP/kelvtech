import React from "react";
import { obj } from "../../assets/assets";
function Footer() {
  return (
    <footer class="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary pt-8 w-full text-white">
      <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96">
          <img class="h-9" src={obj.logo} alt="dummyLogoDark" />
          <p class="mt-6 text-sm">
            At KevTech, we don’t just build software — we craft powerful digital
            solutions tailored for your growth. Whether it’s a website, app, or
            system, your vision becomes reality right here.
          </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
            <ul class="text-sm space-y-2">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#"> X</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">FaceBook</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div class="text-sm space-y-2">
              <p>+254799065377</p>
              <p>kelvinnjuguna357@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © KevTECH. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
