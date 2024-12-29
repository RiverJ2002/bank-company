import Image from "next/image";
import bank_icon from "./src/images/bank_icon.png" 
import ham_icon from "./src/images/ham_icon.png"



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

            <section className="bg-lime-300">
              <p className="text-center text-[28px]">
                Welcome to YourBank
              Empowering Your <br />
              Financial Journey
              </p>

            </section>

        </section>;
}
