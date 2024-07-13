import React from 'react';

export default function TeamSection() {
  return (
    <div className="teamsection section-pb pb-16 md:pb-20 lg:pb-[130px]">
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]">
        <div className="teamsection_title mx-auto mb-16 max-w-[32rem] text-center">
          <div className="section-title">
            <h5 className="sub-title mb-4 text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500">Our Team</h5>
            <h2 className="title text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
              <span>People Behind the </span>
              <span className="relative">
                Screen
                <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
              </span>
            </h2>
          </div>
        </div>
        <div className="teams grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="teams_box group">
              <div className="teams_image relative overflow-hidden rounded-t-lg">
                <img src="/image/ceo.png" alt="Nicolas Williams" className="w-full group-hover:transform group-hover:scale-[1.1] transition-all" />
                <h4 className="teams_name absolute top-9 left-6 text-2xl leading-8 font-bold text-[#1d3557]">Nicolas <br /> Williams</h4>
              </div>
              <div className="teams_content rounded-b-lg bg-[#ebf7f8] py-4 text-center">
                <h4 className="teams_designation text-base font-medium leading-[1.3] text-[#c45251]">Founder &amp; CEO</h4>
                <span className="teams_mail mt-1 font-light leading-6 tracking-[1px] text-[#585858] lg:tracking-[2px] xl:tracking-[3px]">
                  <a href="mailto:nicolas@busino.com">nicolas@busino.com</a>
                </span>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div className="teams_box group">
              <div className="teams_image relative overflow-hidden rounded-t-lg">
                <img src="/image/creative-head.png" alt="Sharlin Smith" className="w-full group-hover:transform group-hover:scale-[1.1] transition-all" />
                <h4 className="teams_name absolute top-9 left-6 text-2xl leading-8 font-bold text-[#1d3557]">Sharlin <br /> Smith</h4>
              </div>
              <div className="teams_content rounded-b-lg bg-[#ebf7f8] py-4 text-center">
                <h4 className="teams_designation text-base font-medium leading-[1.3] text-[#c45251]">Creative Head</h4>
                <span className="teams_mail mt-1 font-light leading-6 tracking-[1px] text-[#585858] lg:tracking-[2px] xl:tracking-[3px]">
                  <a href="mailto:sharlin@busino.com">sharlin@busino.com</a>
                </span>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div className="teams_box group">
              <div className="teams_image relative overflow-hidden rounded-t-lg">
                <img src="/image/marketing-head.jpg" alt="Stephen Flemming" className="w-full group-hover:transform group-hover:scale-[1.1] transition-all" />
                <h4 className="teams_name absolute top-9 left-6 text-2xl leading-8 font-bold text-[#1d3557]">Stephen <br /> Flemming</h4>
              </div>
              <div className="teams_content rounded-b-lg bg-[#ebf7f8] py-4 text-center">
                <h4 className="teams_designation text-base font-medium leading-[1.3] text-[#c45251]">Marketing Head</h4>
                <span className="teams_mail mt-1 font-light leading-6 tracking-[1px] text-[#585858] lg:tracking-[2px] xl:tracking-[3px]">
                  <a href="mailto:stephen@busino.com">stephen@busino.com</a>
                </span>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div className="teams_box group">
              <div className="teams_image relative overflow-hidden rounded-t-lg">
                <img src="/image/hr-head.jpg" alt="Thomas Morgan" className="w-full group-hover:transform group-hover:scale-[1.1] transition-all" />
                <h4 className="teams_name absolute top-9 left-6 text-2xl leading-8 font-bold text-[#1d3557]">Thomas <br /> Morgan</h4>
              </div>
              <div className="teams_content rounded-b-lg bg-[#ebf7f8] py-4 text-center">
                <h4 className="teams_designation text-base font-medium leading-[1.3] text-[#c45251]">HR Head</h4>
                <span className="teams_mail mt-1 font-light leading-6 tracking-[1px] text-[#585858] lg:tracking-[2px] xl:tracking-[3px]">
                  <a href="mailto:thomas@busino.com">thomas@busino.com</a>
                </span>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
