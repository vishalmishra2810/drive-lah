import Card from "../card/card";
import CardInput from "./subscription/card-details";
import RadioButton from "./subscription/radio-button";

const SubscriptionPlanComponent = () => {
    return (
        <div className="bg-[#FFFFFF] rounded-[10px] p-[30px] mb-[60px]">
            <h1 className="text-[#026786] text-[20px] font-bold">Subscription plan</h1>
            <p className="text-[#4A4A4A] text-[12px] font-regular">Select the ideal subscription plan for your listing.</p>
            <div className="w-[calc(100% + 60px)] h-[1px] bg-[#E6E6E6] mt-[10px] mx-[-30px]"></div>
            <p className="text-[#4A4A4A] text-[16px] font-semibold my-[20px]">Select your plan</p>
            <div className="flex flex-col md:flex-row gap-5">
                <Card
                    title="Just mates"
                    text1="Bring your own GPS"
                    text2="Mileage reporting to be done by you"
                    text3="In-person key handover to guests"
                    type="Free"
                />
                <Card
                    title="Good mates"
                    text1="Primary GPS included"
                    text2="Automated mileage calculations"
                    text3="In-person key handover to guests"
                    type="$10/month"
                />
                <Card
                    title="Best mates"
                    text1="Keyless access technology"
                    text2="Automated mileage calculations"
                    text3="Remote handover to guests"
                    type="$30/month"
                />
            </div>
            <div className="w-[calc(100% + 60px)] h-[1px] bg-[#E6E6E6] mt-[40px] mx-[-30px]"></div>
            <p className="text-[#4A4A4A] text-[16px] font-semibold my-[20px]">Select add-ons for your subscription</p>
            <RadioButton />
            <div className="w-[calc(100% + 60px)] h-[1px] bg-[#E6E6E6] mt-[40px] mx-[-30px]"></div>
            <p className="text-[#4A4A4A] text-[16px] font-semibold my-[20px]">Add card details</p>
            <CardInput />
            <div className="w-[calc(100% + 60px)] h-[1px] bg-[#E6E6E6] mt-[40px] mx-[-30px]"></div>
            <p className="text-[#4A4A4A] text-[20px] pt-[20px] font-regular">Learn more about the plans here - <span className="underline text-[#00A3AD] text-[20px]">What is the right plan for me? </span><br></br>You will be able to switch between plans easily later as well. Speak to our host success team if you need any clarifications.</p>
        </div>
    )
}

export default SubscriptionPlanComponent;