
import { MoreVertical,Users,Calendar } from "lucide-react";

export const  ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors">
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-white font-semibold">{project.name}</h4>
      <button className="text-gray-400 hover:text-white">
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
    <div className="space-y-2 mb-4">
      <div className="flex justify-between text-xs">
        <span className="text-gray-400">Progress</span>
        <span className="text-white font-semibold">{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-linear-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
    </div>
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-1 text-gray-400">
        <Users className="w-3 h-3" />
        <span>{project.members} members</span>
      </div>
      <div className="flex items-center gap-1 text-gray-400">
        <Calendar className="w-3 h-3" />
        <span>{project.deadline}</span>
      </div>
    </div>
  </div>
);

