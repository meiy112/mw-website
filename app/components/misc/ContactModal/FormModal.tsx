import ReactionSlider from "./ReactionSlider";
import { useEmailForm } from "../../context/EmailFormContext";

export default function FormModal() {
  return (
    <div className="rounded-[25px] w-[16em] h-[27em] p-[24px] glass-container">
      <Profile />
      <Forms />
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-row gap-x-[1rem]">
      <div
        className="w-[49.6px] rounded-[50%] overflow-hidden aspect-square flex relative"
        style={{
          background: "#8BA6D3",
        }}
      >
        <img
          src="/images/user.png"
          className="scale-[4] absolute top-[50%] left-[5%]"
          alt="banana guy"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-bold text-[0.97rem]">You</p>
        <p className="font-light text-[0.8rem] opacity-[0.8]">@YesYou</p>
      </div>
    </div>
  );
}

function Forms() {
  const emailForm = useEmailForm();

  return (
    <div className="mt-[20px] gap-y-[1.5em] flex flex-col">
      <div className="flex flex-col gap-y-[0.2em]">
        <p className="font-bold text-[0.83rem]">Your Name</p>
        <input
          className="placeholderColor glass-input rounded-[25px] p-[10px] text-[0.9rem] w-[100%]"
          type="text"
          placeholder="What should I call you?"
          onChange={(e) => (emailForm.setName = e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-[0.2em]">
        <p className="font-bold text-[0.83rem]">Your Email</p>
        <input
          className="placeholderColor glass-input rounded-[25px] p-[10px] text-[0.9rem] w-[100%]"
          type="email"
          placeholder="Where should I reply back?"
          onChange={(e) => (emailForm.setEmail = e.target.value)}
        />
      </div>
      <div>
        <p className="font-bold text-[0.83rem]">Your Reaction</p>
        <ReactionSlider />
      </div>
    </div>
  );
}
