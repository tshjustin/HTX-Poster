import React from 'react';
import { 
  BrainCircuit, 
  ThumbsUp, 
  ThumbsDown,
  MessagesSquare, 
  Bot, 
  Users, 
  Sparkles, 
  Database, 
  ArrowDown, 
  Scale, 
  ListChecks,
  Cpu,
  GitBranch,
  Workflow,
  Gauge,
  BookOpen,
  Code2,
  Repeat,
  Fingerprint,
  Network,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Star
} from 'lucide-react';

const PosterApp = () => {
  // Define a function to handle errors for image loading
  const handleImageError = (e) => {
    console.error("Failed to load image:", e.target.src);
    // Optionally set a fallback image
    e.target.src = "https://via.placeholder.com/100?text=Logo";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 p-4">
      <div className="w-[75%] mx-auto bg-white/95 rounded-2xl shadow-2xl p-5 backdrop-blur-sm">
        {/* Header with Logo */}
        <div className="relative mb-6">
          <div className="absolute top-0 left-0 w-20 h-20">
            <img 
              src="/assets/htx.png" 
              alt="HTX Logo" 
              className="w-full h-full object-contain"
              onError={handleImageError}
            />
          </div>
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-full">
              <img 
                src="/assets/llama.webp" 
                alt="Llama Logo" 
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
            </div>
          </div>
          <div className="text-center py-6 px-16">
            <h1 className="text-4xl font-bold text-purple-900 mb-3 flex items-center justify-center gap-3">
              <BrainCircuit className="w-10 h-10 text-purple-700" />
              Reinforcement Learning with Human Feedback
            </h1>
            <h2 className="text-2xl text-blue-800">
              Teaching AI Models Through Human Guidance
            </h2>
          </div>
        </div>

        {/* First Row: Problem, Solution, Importance */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Problem Box */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6" />
              The Problem
            </h3>
            <div className="mb-4">
              <div className="flex flex-col space-y-3 mb-3">
                {/* Human speech bubble on top */}
                <div className="bg-blue-100 rounded-lg p-3 relative max-w-[80%] self-start">
                  <div className="absolute h-3 w-3 bg-blue-100 transform rotate-45 left-3 -top-1"></div>
                  <p className="text-sm font-medium text-gray-700">Write me a poem about climate change</p>
                  <div className="flex justify-start mt-1">
                    <span className="text-xs text-gray-500">Human</span>
                  </div>
                </div>
                
                {/* AI speech bubble below */}
                <div className="bg-purple-100 rounded-lg p-3 relative max-w-[80%] self-end">
                  <div className="absolute h-3 w-3 bg-purple-100 transform rotate-45 right-3 -top-1"></div>
                  <p className="text-sm font-medium text-gray-700">Climate change data shows a 0.8°C increase in global temperatures since 1880. The primary factors are greenhouse gas emissions from fossil fuels and deforestation...</p>
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-500">AI Model</span>
                  </div>
                </div>
              </div>
            </div>
            
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">Models struggle to align with human values and expectations</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">May generate incorrect, harmful, or misleading content</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">Understanding nuance is challenging for AI systems</p>
              </li>
            </ul>
          </div>

          {/* Solution Box */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6" />
              The Solution
            </h3>
            
            <ul className="space-y-2 pl-2 mb-4">
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <p className="text-base">RLHF fine-tunes models using human feedback and preferences</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <p className="text-base">Similar to teaching through continuous feedback and ratings</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-blue-700 font-bold mt-1">•</span>
                <p className="text-base">Models learn to generate content that humans find helpful</p>
              </li>
            </ul>

            <div className="mt-4">
              <div className="flex justify-center space-x-6 mb-3">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 rounded-lg p-3 relative max-w-xs mb-2">
                    <p className="text-sm font-medium text-gray-700">Let me try to help improve the AI response</p>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex flex-col items-center">
                      <ThumbsUp className="w-6 h-6 text-green-600" />
                      <span className="text-xs text-gray-600">Helpful</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ThumbsDown className="w-6 h-6 text-red-600" />
                      <span className="text-xs text-gray-600">Not Helpful</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Importance Box */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-3">
              <Star className="w-6 h-6" />
              Why It Matters
            </h3>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">Ensures AI systems align with human values and expectations</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">Creates more helpful, accurate, and safer AI responses</p>
              </li>
              <li className="flex items-start gap-2 text-gray-800">
                <span className="text-purple-700 font-bold mt-1">•</span>
                <p className="text-base">Bridges the gap between capability and practical usefulness</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: LLM Training Pipeline Horizontal */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center gap-3">
            <Workflow className="w-7 h-7" />
            LLM Training Pipeline
          </h3>
          
          <div className="flex justify-between items-center">
            {/* Data Gathering */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium text-purple-800 mb-2">
                Data Gathering
              </div>
              
              <div className="bg-white/90 p-3 rounded-lg border-2 border-purple-300 shadow-sm w-44 h-28 flex flex-col justify-center items-center">
                <Database className="w-10 h-10 text-purple-700 mb-2" />
                <p className="text-sm text-purple-800 font-medium mb-1 w-40 text-center">Step 1</p>
                <p className="text-xs text-gray-600 text-center">Gather vast amounts of text data</p>
              </div>
            </div>
            
            <ChevronRight className="w-8 h-8 text-purple-500" />
            
            {/* Pre-training */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium text-purple-800 mb-2">
                Pre-training
              </div>
              
              <div className="bg-white/90 p-3 rounded-lg border-2 border-purple-300 shadow-sm w-44 h-28 flex flex-col justify-center items-center">
                <Bot className="w-10 h-10 text-purple-700 mb-2" />
                <p className="text-sm text-purple-800 font-medium mb-1 w-40 text-center">Step 2</p>
                <p className="text-xs text-gray-600 text-center">Model learns language patterns</p>
              </div>
            </div>
            
            <ChevronRight className="w-8 h-8 text-purple-500" />
            
            {/* SFT */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium text-purple-800 mb-2">
                SFT
              </div>
              
              <div className="bg-white/90 p-3 rounded-lg border-2 border-purple-300 shadow-sm w-44 h-28 flex flex-col justify-center items-center">
                <MessagesSquare className="w-10 h-10 text-purple-700 mb-2" />
                <p className="text-sm text-purple-800 font-medium mb-1 w-40 text-center">Step 3</p>
                <p className="text-xs text-gray-600 text-center">Fine-tune with human-written examples</p>
              </div>
            </div>
            
            <ChevronRight className="w-8 h-8 text-purple-500" />
            
            {/* RLHF */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium text-purple-800 mb-2">
                RLHF
              </div>
              
              <div className="bg-purple-300 p-3 rounded-lg border-2 border-purple-500 shadow-md w-44 h-28 flex flex-col justify-center items-center">
                <Users className="w-10 h-10 text-purple-900 mb-2" />
                <p className="text-sm text-purple-900 font-medium mb-1 w-40 text-center">Step 4</p>
                <p className="text-xs text-purple-900 text-center">Learn from human feedback preferences</p>
              </div>
            </div>
            
            <ChevronRight className="w-8 h-8 text-purple-500" />
            
            {/* Deployment */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-medium text-purple-800 mb-2">
                Deployment
              </div>
              
              <div className="bg-white/90 p-3 rounded-lg border-2 border-purple-300 shadow-sm w-44 h-28 flex flex-col justify-center items-center">
                <Sparkles className="w-10 h-10 text-purple-700 mb-2" />
                <p className="text-sm text-purple-800 font-medium mb-1 w-40 text-center">Step 5</p>
                <p className="text-xs text-gray-600 text-center">Model ready for real-world applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row: Implementation and Data Requirements */}
        <div className="grid grid-cols-2 gap-8">
          {/* How is RLHF Implemented? */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 flex items-center gap-3 mb-4">
              <ListChecks className="w-6 h-6" />
              How is RLHF Implemented?
            </h3>
            
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <Database className="w-6 h-6 mt-1 flex-shrink-0 text-purple-700" />
                <div>
                  <span className="font-medium text-purple-900 text-base">1. Generate Responses</span>
                  <p className="text-sm text-gray-700 mt-1">Collect diverse model responses for various prompts</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 mt-1 flex-shrink-0 text-purple-700" />
                <div>
                  <span className="font-medium text-purple-900 text-base">2. Human Evaluation</span>
                  <p className="text-sm text-gray-700 mt-1">Human raters compare and rank responses based on quality</p>
                  <span className="bg-yellow-200 px-2 py-1 text-xs rounded-md text-purple-800 font-bold inline-block mt-1">This is where RLHF happens!</span>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Gauge className="w-6 h-6 mt-1 flex-shrink-0 text-purple-700" />
                <div>
                  <span className="font-medium text-purple-900 text-base">3. Train Reward Model</span>
                  <p className="text-sm text-gray-700 mt-1">Create a reward model using these human preferences</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 mt-1 flex-shrink-0 text-purple-700" />
                <div>
                  <span className="font-medium text-purple-900 text-base">4. Fine-tune with RL</span>
                  <p className="text-sm text-gray-700 mt-1">Optimize the model to maximize the reward score</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Repeat className="w-6 h-6 mt-1 flex-shrink-0 text-purple-700" />
                <div>
                  <span className="font-medium text-purple-900 text-base">5. Iterate</span>
                  <p className="text-sm text-gray-700 mt-1">Continuously improve model alignment through cycles</p>
                </div>
              </li>
            </ul>
          </div>

          {/* How Much Data is Needed? */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6" />
              How Much Data is Needed?
            </h3>
            
            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <Code2 className="w-6 h-6 mt-1 flex-shrink-0 text-blue-700" />
                <div>
                  <span className="font-medium text-blue-900 text-base">Small Models (6B-175B parameters):</span>
                  <p className="text-sm text-gray-700 mt-1">10,000 to 100,000 high-quality labeled preferences needed for effective fine-tuning</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Network className="w-6 h-6 mt-1 flex-shrink-0 text-blue-700" />
                <div>
                  <span className="font-medium text-blue-900 text-base">Large Models (100B+ parameters):</span>
                  <p className="text-sm text-gray-700 mt-1">100,000 to 1,000,000 examples of labeled preferences required for successful training</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Fingerprint className="w-6 h-6 mt-1 flex-shrink-0 text-blue-700" />
                <div>
                  <span className="font-medium text-blue-900 text-base">Direct Preference Optimisation (DPO):</span>
                  <p className="text-sm text-gray-700 mt-1">Alternative method requiring approximately 40% fewer human preferences while achieving similar alignment results</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-yellow-100 p-4 rounded-lg mt-4 border border-yellow-300 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-yellow-800 text-base">🤖 Fun Fact!</span>
                <p className="text-sm text-gray-800">
                  Almost ALL modern AI chatbots use RLHF to become better at conversing with humans
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-base font-semibold text-gray-700">By HTX QTeam4</p>
        </div>
      </div>
    </div>
  );
};

export default PosterApp;