import Image from "next/image";
import bank_icon from "./src/images/bank_icon.png" 
import ham_icon from "./src/images/ham_icon.png"
import check_icon from "./src/images/check_icon.png"


export default function Home() {





  return <section className="bg-yellow-400 px-[16px]"> 
  
            <nav className="bg-[#1C1C1C] mt-[40px] h-[68px] flex items-center 
            justify-between rounded-[100px]"> 
              
              <div className="flex items-center ml-[24px]">
                <Image src={bank_icon} width="28" height="28" alt="image not found"/>
                <p className="text-[#FFFFFF] text-[20px]">YourBanK</p>
              </div>

              <div className="bg-[#CAFF33] flex px-[14px] py-[6px] 
                 mr-[14px] rounded-[82px]">
                <Image src={ham_icon} width="28" height="28" alt="image not found"/>
              </div>
              
            </nav>

            <section className="bg-purple-300  mt-[50px] flex flex-col items-center">

              <div className="bg-[#262626] px-[16px] py-[8px] w-[245px] flex 
              items-center mb-[12px] rounded-[61px]">
                <Image src={check_icon} width="20" height="20" alt="image not found"/>
                <p className="text-[#FFFFFF] text-[12px] ml-[4px]">No LLC Required, No Credit Check.</p>
              </div>

              <p className="text-center text-[28px]">
                Welcome to YourBank
              Empowering Your <br />
              <span className="text-[#CAFF33]">Financial Journey</span>
              
              </p>

              <p className="text-center text-[14px] mt-[8px]">
              At YourBank, our mission is to provide comprehensive banking solutions 
              that empower individuals and businesses to achieve their financial goals. 
              We are committed to delivering personalized and innovative services that 
              prioritize our customers' needs.
              </p>

              <button className="text-[14px] px-[24px] py-[14px] mt-[30px]
              bg-[#CAFF33] rounded-[82px]">Open Account</button>

            </section>

        </section>;
}
