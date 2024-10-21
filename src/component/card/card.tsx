const Card = ({
    text1,
    text2,
    text3,
    type,
    title,
  }: {
    text1: string;
    text2: string;
    text3: string;
    type: string;
    title: string;
  }) => {
    const [amount, label] = type.split("/");
  
    const backgroundColor = title === "Best mates" ? "#F2FAFB" : "#FCFCFC";
  
    return (
      <div
        className="flex flex-col gap-[9px] p-[15px] w-[297px] h-[176px] rounded-[10px] border border-[#E6E6E6]"
        style={{ backgroundColor }}
      >
        <p className="text-[#026786] text-[16px] font-semibold">{title}</p>
        
        {/* First image with text1 */}
        <div className="flex items-center">
          <img src="../images/group.svg" alt="group" className="h-[10px] w-[10px] mr-2" />
          <p className="text-[#4A4A4A] text-[12px] font-regular">{text1}</p>
        </div>
  
        {/* Second image with text2 */}
        <div className="flex items-center">
          <img src="../images/e.svg" alt="e" className="h-[10px] w-[10px] mr-2" />
          <p className="text-[#4A4A4A] text-[12px] font-regular">{text2}</p>
        </div>
  
        {/* Third image with text3 */}
        <div className="flex items-center">
          <img src="../images/Lock.svg" alt="Lock" className="h-[10px] w-[10px] mr-2" />
          <p className="text-[#4A4A4A] text-[12px] font-regular">{text3}</p>
        </div>
  
        <p className="text-[#026786] text-[18px] font-bold">
          <span className="text-[22px]">{amount}</span>{" "}
          {title === "Just mates" ? (
          <span className="text-[14px]">{label}</span>
        ) : (
          <span className="text-[14px]">/{label}</span>
        )}
        </p>
      </div>
    );
  };
  
  export default Card;
  