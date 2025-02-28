import React from 'react';
import { 
  BrainCircuit, 
  ThumbsUp, 
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
  ArrowRight
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm">
        {/* Header with Logo */}
        <div className="relative mb-8">
          <div className="absolute top-0 left-0 w-24 h-24">
            <img 
              src="assets/htx.png" 
              alt="HTX Logo" 
              className="w-100 h-100 object-contain"
            />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
              <img 
                src="assets/llama.webp" 
                alt="Llama Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-900 mb-2 flex items-center justify-center gap-3">
              <BrainCircuit className="w-10 h-10 text-purple-700" />
              Reinforcement Learning with Human Feedback
            </h1>
            <h2 className="text-2xl text-blue-800">
              Teaching AI Models Through Human Guidance
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Core Concepts */}
          <div className="space-y-6 lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl relative group transition-all hover:shadow-lg">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center text-sm">1</div>
                <h3 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-4">
                  <BrainCircuit className="w-6 h-6" />
                  What is RLHF?
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-4">
                  <li>A method to fine-tune AI models using human feedback and preferences</li>
                  <li>Similar to teaching through continuous feedback, like giving thumbs up/down</li>
                  <li>Helps align AI behavior with human values and expectations</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl relative group transition-all hover:shadow-lg">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center text-sm">3</div>
                <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-6 h-6" />
                  Why is it Important?
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-4">
                  <li>Ensures AI models understand and align with human preferences</li>
                  <li>Creates more helpful and accurate AI responses</li>
                  <li>Improves safety and reliability of AI systems</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl relative group transition-all hover:shadow-lg">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center text-sm">2</div>
                <h3 className="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-4">
                  <ListChecks className="w-6 h-6" />
                  How is RLHF Implemented?
                </h3>
                
                <div className="mb-4">
                  <div className="relative">
                    <img 
                      src="assets/rlhf.png" 
                      alt="RLHF Implementation Process" 
                      className="w-full h-auto rounded-lg mb-3"
                    />
                    <div className="absolute inset-0 bg-purple-500/10 rounded-lg"></div>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2 p-1 rounded hover:bg-purple-100/50 transition-colors">
                    <Database className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Collect diverse responses from the model for various prompts</span>
                  </li>
                  <li className="flex items-start gap-2 p-1 rounded hover:bg-purple-100/50 transition-colors">
                    <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Human raters compare and rank responses based on quality and safety</span>
                    <span className="bg-yellow-200 px-2 py-1 text-xs rounded-md text-purple-800 font-bold">This is where RLHF happens!</span>
                  </li>
                  <li className="flex items-start gap-2 p-1 rounded hover:bg-purple-100/50 transition-colors">
                    <Gauge className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Train a reward model using these human preferences</span>
                  </li>
                  <li className="flex items-start gap-2 p-1 rounded hover:bg-purple-100/50 transition-colors">
                    <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Fine-tune the model using reinforcement learning to maximise the reward score</span>
                  </li>
                  <li className="flex items-start gap-2 p-1 rounded hover:bg-purple-100/50 transition-colors">
                    <Repeat className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Iterate the process to continuously improve model alignment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl relative group transition-all hover:shadow-lg">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-purple-200 text-purple-800 flex items-center justify-center text-sm">4</div>
                <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 mb-4">
                  <Scale className="w-6 h-6" />
                  How Much Data is Needed?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="bg-white/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Small Models (6B-175B parameters):
                    </h4>
                    <p>10,000 to 100,000 high-quality labeled preferences for effective fine-tuning</p>
                  </div>
                  
                  <div className="bg-white/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Network className="w-5 h-5" />
                      Large Models (100B+ parameters):
                    </h4>
                    <p>100,000 to 1,000,000 examples of labeled preferences are used for effective fine-tuning</p>
                  </div>
                  
                  <div className="bg-white/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Fingerprint className="w-5 h-5" />
                      Direct Preference Optimisation (DPO):
                    </h4>
                    <p>Alternate methods such as explicit reward modeling, requiring fewer human preferences while achieving similar alignment</p>
                    <img 
                      src="assets/LLMdata.png" 
                      alt="LLM Data Visualization" 
                      className="w-full h-auto rounded-lg mt-3 border border-purple-200 opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Training Flow Diagram */}
          <div className="bg-gradient-to-br from-purple-200 to-blue-100 p-6 rounded-xl h-full flex flex-col relative group transition-all hover:shadow-lg">
            <div className="relative">
              <h3 className="text-xl font-semibold text-purple-800 mb-6 text-left flex items-left justify-left gap-2">
                LLM Training Pipeline
                <img 
                  src="assets/pipeline.png" 
                  alt="Pipeline Icon" 
                  className="w-6 h-6 object-contain"
                />
              </h3>
              
              {/* Fun Fact Circle - positioned above the title */}
              <div className="absolute -top-8 -right-5 bg-yellow-100 p-3 rounded-full w-32 h-32 shadow-md flex items-center justify-center text-center border-2 border-yellow-300 rotate-3 transform hover:rotate-0 transition-transform">
                <div>
                  <div className="mb-1 text-xs font-bold">🤖 Fun Fact!</div>
                  <p className="text-xs leading-tight text-gray-800">
                    Almost ALL AI chatbots use RLHF to become better at chatting
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-training Phase Label */}
            <div className="text-sm font-medium text-purple-800 mb-4 border-b border-purple-300 pb-2">
              Pre-training Phase
            </div>

            <div className="flex-1 flex flex-col items-center">
              {/* Data Collection */}
              <div className="w-full bg-white/90 p-4 rounded-lg border-2 border-purple-300 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-purple-800">
                  <Database className="w-5 h-5" />
                  <span className="font-medium">Data Collection</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">Gather and prepare training data</p>
              </div>

              {/* Arrow Spacer */}
              <div className="h-8 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>

              {/* Pre-training */}
              <div className="w-full bg-white/90 p-4 rounded-lg border-2 border-purple-300 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-purple-800">
                  <Bot className="w-5 h-5" />
                  <span className="font-medium">Pre-training</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">Model learns from vast amounts of text data</p>
              </div>

              {/* Arrow Spacer */}
              <div className="h-8 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>

              {/* Post-training Phase Label */}
              <div className="w-full text-sm font-medium text-purple-800 mb-4 border-b border-purple-300 pb-2 mt-2">
                Post-training Phase
              </div>

              {/* Supervised Fine-tuning */}
              <div className="w-full bg-white/90 p-4 rounded-lg border-2 border-purple-300 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-purple-800">
                  <MessagesSquare className="w-5 h-5" />
                  <span className="font-medium">Supervised Fine-tuning (SFT)</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">Model learns from human-written examples</p>
              </div>

              {/* Arrow Spacer */}
              <div className="h-8 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>

              {/* RLHF */}
              <div className="w-full bg-purple-300 p-4 rounded-lg border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 text-purple-900">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">RLHF (We are here!)</span>
                </div>
                <p className="text-sm text-purple-800 mt-1">Model learns from human feedback and preferences</p>
                <div className="mt-2 bg-purple-200/50 p-2 rounded text-xs text-purple-900">
                  Current focus: Optimizing human feedback integration
                </div>
              </div>

              {/* Arrow Spacer */}
              <div className="h-8 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>

              {/* Final Deployment */}
              <div className="w-full bg-white/90 p-4 rounded-lg border-2 border-purple-300 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 text-purple-800">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Final Deployment</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">Model ready for real-world use</p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-purple-600 italic">
              Each stage builds upon the previous learnings
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>By HTX QTeam</p>
        </div>
      </div>
    </div>
  );
}

export default App;