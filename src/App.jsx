import { GoHome,GoPeople } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { MdPayments, MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { LuMousePointer2, LuDownload, LuPalette } from "react-icons/lu";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { IoFlashOutline, IoGridOutline } from "react-icons/io5";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { PiChartBar, PiQuestion } from "react-icons/pi";
import { HiOutlineClipboardList, HiChatAlt } from "react-icons/hi";
import { AiOutlineSound } from "react-icons/ai";
import { FaChevronDown, FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbArrowsSort } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";


function App() {

  const tableRows = [];

  for(let i=1; i<20; i++){
    tableRows.push(
      <tr key={i}>
      <td className='text-[#0070b4]'>#281209</td>
      <td>7 July, 2023</td>
      <td>₹ 1,278.23</td>
      <td>₹ 22</td>
    </tr>
    );
  }

  return (
    <div className='flex'>
      <div className='w-[20vw] h-[200vh] bg-[#1b2640] text-[#d1d4d9] flex flex-col justify-between'>
        <div>

          <div className='flex justify-between items-center'>
            <div className='flex items-center text-xl'>
              <img src='https://dukaan.b-cdn.net/300x300/webp/5179822/17f41e92-75fb-4c49-b68c-0c3c7cdc9c9d/1634643435224-7c36895b-b0d0-4599-9ee3-65cf84143d3b.jpeg' alt='logo' className='w-24 p-5 rounded-3xl'/>
              <div>
                <h4 className='font-semibold text-white'>Nishyan</h4>
                <a href="http://mydukaan.io/" className='border-b-[1px]'>Visit store</a>
              </div>
            </div>
            <FaChevronDown className='text-4xl pr-5 text-white'/>
          </div>
          
          <ul className='list-none text-base pt-5'>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><GoHome className='text-2xl'/><span>Home</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><HiOutlineClipboardList className='text-2xl'/><span>Orders</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><TfiLayoutGrid2 className='text-xl'/><span>Products</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><FiTruck className='text-2xl'/><span>Delivery</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><AiOutlineSound className='text-2xl'/><span>Marketing</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><PiChartBar className='text-2xl'/><span>Analytics</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer bg-[#313c53] text-white'><MdPayments className='text-2xl'/><span>Payments</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><LuMousePointer2 className='text-2xl'/><span>Tools</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><CiDiscount1 className='text-2xl'/><span>Discounts</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><GoPeople className='text-2xl'/><span>Audience</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><LuPalette className='text-2xl'/><span>Appearance</span></li>
            <li className='flex items-center space-x-3 pl-5 py-2 mx-2 rounded cursor-pointer'><IoFlashOutline className='text-2xl'/><span>Plugins</span></li>
          </ul>
        </div>
        <div className='flex items-center space-x-3 pl-5 py-2 m-2 rounded cursor-pointer bg-[#323c53]'>
          <CiWallet className='text-5xl rounded text-white bg-[#465064] p-1'/>
          <div className='text-base'>
            <h5>Available credits</h5>
            <h4 className='text-white text-xl'>222.10</h4>
          </div>
        </div>
      </div>


      <div className='w-[80vw] text-[#4d4d4d]'>
        <header className='flex items-center justify-between border-b-[1px] border-[#cecece] p-5 text-xl'>
          <div className='flex items-center'>
            <span className='text-[#1a181e]'>Payments</span>
            <span className='flex items-center px-2 text-[0.92rem] cursor-pointer'><PiQuestion/>How it works</span>
          </div>
          <div className='flex items-center'>
            <IoIosSearch className='text-[#808080]'/>
            <input type='text' placeholder='Search features, tutorials, etc.' className='outline-none w-[17rem] p-1 rounded bg-[#f2f2f2]'/>
          </div>
          <div className='flex items-center space-x-5 text-4xl'>
            <HiChatAlt className='bg-[#e6e6e6] p-[0.27rem] rounded-full'/>
            <FaCaretDown className='bg-[#e6e6e6] p-[o.27rem] rounded-full'/>
          </div>
        </header>

        <div className='p-5'>
          <div className='flex justify-between items-end text-xl'>
            <span className='text-2xl font-semibold py-3 text-[#1a181e]'>Overview</span>
            <select className='border-[1px] border-[#cecece] cursor-pointer rounded'><option>Last Month</option></select>
          </div>

          <div className='flex items-center p-5'>
            <div className='w-[50%]'>
              <span>Online orders</span><br/>
              <span className='text-4xl text-[#1a181e]'>231</span>
            </div>
            <div className='w-[50%]'>
              <span>Amount received</span><br/>
              <span className='text-4xl text-[#1a181e]'>₹23,92,312.19</span>
            </div>
          </div>
        </div>

        <div className='px-5'>
          <h4 className='text-2xl font-semibold py-3 text-[#1a181e]'>Transaction | This Month</h4>
          <div className='flex items-center justify-between py-5'>
            <div className='flex items-center rounded border-[1px] border-[#cecece] px-4 py-1'>
              <IoIosSearch/>
              <input type='text' placeholder='Search by order ID' className='outline-none p-1'/>
            </div>
            <div className="flex items-center space-x-5">
              <span className='flex items-center rounded border-[1px] border-[#cecece] p-1 cursor-pointer'>Sort <TbArrowsSort className='rotate-180 mx-1'/></span>
              <LuDownload className="rounded text-3xl border-[1px] border-[#cecece] p-1 cursor-pointer"/>
            </div>
            
          </div>

          <table className='w-[98%] mx-auto text-right leading-10'>
            <tr className='bg-[#f2f2f2] rounded'>
              <th>Order ID</th>
              <th>Order date+</th>
              <th>Order amount</th>
              <th className='flex items-center justify-end'>Transaction fees <GrCircleInformation className='ml-1 cursor-pointer'/></th>
            </tr>
            <tbody>
              {tableRows}
            </tbody>
          </table>

          <div className='w-[40%] mx-auto flex items-center justify-between py-7'>
            <button className='border-[1px] [#cecece] cursor-pointer flex items-center'><MdOutlineNavigateBefore/>Previous</button>
            <ul className='flex items-center space-x-2 cursor-pointer'>
              <li>1</li>
              <li>...</li>
              <li className='bg-[#0070b4] text-white p-1 rounded'>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
            </ul>
            <button className='border-[1px] [#cecece] cursor-pointer flex items-center'>Next <MdOutlineNavigateNext/></button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App;