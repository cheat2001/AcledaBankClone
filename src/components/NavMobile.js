import React,{useContext,useState,useEffect} from 'react'
import styles from '../styles/NavMobile.module.css';
import { XIcon,FlagIcon,GlobeAltIcon,SearchIcon,ChartBarIcon,DownloadIcon ,InformationCircleIcon,LibraryIcon,ChevronDownIcon,ChevronUpIcon,UserIcon,OfficeBuildingIcon,CreditCardIcon,FingerPrintIcon} from '@heroicons/react/solid'
function NavMobile({action}) {
    const [toggle,setToggle]=useState(action);

    useEffect(()=>{
      setToggle(pre=>!pre);
    },[action]);

    useEffect(() => {
        function handleResize() {
         if(window.innerWidth>850){
          setToggle(false);  
         }
         console.log(window.innerWidth);
         
    }
        window.addEventListener('resize', handleResize)
      })
    const [zip1,setZip1]=useState(false);
    const [zip2,setZip2]=useState(false);
    const [zip3,setZip3]=useState(false);
    const [zip4,setZip4]=useState(false);
    const [zip5,setZip5]=useState(false);
  return (
    <div style={toggle?{left:"0"}:{left:"-100vw"}} className={styles.Navbar}>
        <div className={styles.Top}>
            <FlagIcon style={{width:"35px",color:"white"}}/>
            <XIcon style={{width:"35px",color:"white",cursor: "pointer"}} onClick={()=>setToggle(pre=>!pre)}/>
        </div>
        <div className={styles.MiddleLink}>
           <a href="#"><GlobeAltIcon style={{width:"20px"}}/>retail internet banking</a>
           <a href="#"><SearchIcon style={{width:"20px"}}/>Search</a>
           {/* about acleda  start line*/}
           <div className={styles.NestLink} style={zip1?{height:"361px"}:{}}>
             <div className={styles.Nest} onClick={()=>setZip1(pre=>!pre)}>
                <p><LibraryIcon style={{width:"20px"}}/>about acleda</p>
                 {zip1?<ChevronUpIcon style={{width:"20px"}}/>:<ChevronDownIcon style={{width:"20px"}}/>}
             </div>
             <a href="#">Financial Information</a>
                 <a href="#">Bank Profile</a>
                 <a href="#">Media</a>
                 <a href="#">Career</a>
                 <a href="#">Contact Us</a>
           </div>
           {/* about acleda  end line*/}

           {/* personal start line */}
           <div className={styles.NestLink} style={zip2?{height:"481px"}:{}}>
             <div className={styles.Nest} onClick={()=>setZip2(pre=>!pre)}>
                <p><UserIcon style={{width:"20px"}}/>Personal</p>
                 {zip2?<ChevronUpIcon style={{width:"20px"}}/>:<ChevronDownIcon style={{width:"20px"}}/>}
             </div>
             <a href="#">credits</a>
                 <a href="#">Deposits</a>
                 <a href="#">Cash Management</a>
                 <a href="#">Funds Transfers</a>
                 <a href="#">Securities & Trust Services</a>
                 <a href="#">Referral Support Life Assurance Service</a>
                 <a href="#">Financial Health Check</a>
           </div>
           {/* personal end line */}

           {/* Bussiness start*/}
           <div className={styles.NestLink} style={zip3?{height:"481px"}:{}}>
             <div className={styles.Nest} onClick={()=>setZip3(pre=>!pre)}>
                <p><OfficeBuildingIcon style={{width:"20px"}}/>Buesiness</p>
                 {zip3?<ChevronUpIcon style={{width:"20px"}}/>:<ChevronDownIcon style={{width:"20px"}}/>}
             </div>
             <a href="#">credits</a>
                 <a href="#">Deposits</a>
                 <a href="#">Cash Management</a>
                 <a href="#">Funds Transfers</a>
                 <a href="#">Securities & Trust Services</a>
                 <a href="#">Referral Support Life Assurance Service</a>
                 <a href="#">Financial Health Check</a>
           </div>
           {/* Bussiness end*/}

           {/* Card start */}
           <div className={styles.NestLink} style={zip4?{height:"421px"}:{}}>
             <div className={styles.Nest} onClick={()=>setZip4(pre=>!pre)}>
                <p><CreditCardIcon style={{width:"20px"}}/>Cards</p>
                 {zip4?<ChevronUpIcon style={{width:"20px"}}/>:<ChevronDownIcon style={{width:"20px"}}/>}
             </div>
             <a href="#">Customer card</a>
                 <a href="#">acleda card</a>
                 <a href="#">ACLEDA visa card</a>
                 <a href="#">ACLEDA mastercard card</a>
                 <a href="#">ACLEDA jcb card</a>
                 <a href="#">ACLEDA UIP card</a>
             
           </div>
           {/* Card end */}


           {/* Digitals start*/}
           <div className={styles.NestLink} style={zip5?{height:"901px"}:{}}>
             <div className={styles.Nest} onClick={()=>setZip5(pre=>!pre)}>
                <p><FingerPrintIcon style={{width:"20px"}}/>Cards</p>
                 {zip5?<ChevronUpIcon style={{width:"20px"}}/>:<ChevronDownIcon style={{width:"20px"}}/>}
             </div>
                 <a href="#">ACLEDA Internet Banking</a>
                 <a href="#">ACLEDA mobile</a>
                 <a href="#">ACLEDA E-shop</a>
                 <a href="#">ACLEDA E-Commerce</a>
                 <a href="#">ACLEDA ATM</a>
                 <a href="#">ACLEDA POS</a>
                 <a href="#">Term Deposit Machine</a>
                 <a href="#">Virtual Teller Machine</a>
                 <a href="#">PayBand</a>
                 <a href="#">Virtual Card</a>
                 <a href="#">Top Up Service</a>
                 <a href="#">Bill Payment</a>
                 <a href="#">Banking Service Order via E-mail/Fax</a>
                 <a href="#">Message Alert on Account Information</a>
             
           </div>
           {/* Digitals end*/}
           <a href="#"><ChartBarIcon style={{width:"20px"}}/>Investor Relations</a>
           <a href="#"><DownloadIcon style={{width:"20px"}}/>Download</a>
           <a href="#"><InformationCircleIcon style={{width:"20px"}}/>Information</a>
        </div>
    </div>
  )
}

export default NavMobile