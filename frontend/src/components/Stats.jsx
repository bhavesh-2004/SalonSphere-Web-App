import { ThumbsUp, Store, Smile, Users, Star } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: <ThumbsUp className="w-12 h-12 text-orange-400" />,
    value: 5,
    suffix: "+",
    label: "Year of Operations",
  },
  {
    icon: <Store className="w-12 h-12 text-orange-400" />,
    value: 5,
    suffix: "",
    label: "Salons and Growing",
  },
  {
    icon: <Smile className="w-12 h-12 text-orange-400" />,
    value: 3000,
    suffix: "+",
    label: "Happy Members",
  },
  {
    icon: <Users className="w-12 h-12 text-orange-400" />,
    value: 3,
    suffix: "",
    label: "Team Members",
  },
  {
    icon: <Star className="w-12 h-12 text-orange-400" />,
    value: 4.5,
    decimals: 1,
    suffix: "",
    label: "Rating",
  },
];

export default function StatsSection() {
  return (
    <div className="w-full py-12 bg-white  dark:bg-slate-900 dark:text-white ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {stat.icon}
            <h2 className="text-2xl font-bold text-blue-800">
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
              />
            </h2>
            <p className="text-sm text-gray-600  dark:bg-slate-900 dark:text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
