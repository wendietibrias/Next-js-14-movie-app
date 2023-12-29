import { colors } from "@/constants/colors";

const Footer = () => {
  return (
    <footer className="w-full p-6 border-t border-t-gray-200 dark:border-t-0 flex justify-center items-center">
      <div className="text-center">
        <h5 className={`text-[13px] font-semibold dark:text-white ${colors.title}`}> Movie Diary App</h5>
        <p className={`text-[12px] dark:text-white ${colors.text} mt-1`}>Created by Wendi , copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
