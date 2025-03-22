
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import GlassMorphicCard from '@/components/ui/GlassMorphicCard';

const positions = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote (US/Europe)",
    type: "Full-time",
    description: "Join our AI team to design and implement cutting-edge machine learning models that power our enterprise solutions. You'll work on natural language processing, computer vision, and predictive analytics features.",
    responsibilities: [
      "Design and develop AI solutions for enterprise applications",
      "Optimize machine learning models for performance and scalability",
      "Collaborate with product teams to integrate AI features",
      "Research and implement state-of-the-art algorithms",
      "Contribute to our AI development frameworks and tools"
    ],
    requirements: [
      "BS/MS in Computer Science, AI, or related field",
      "3+ years of experience in machine learning and AI development",
      "Strong Python skills and familiarity with ML frameworks (TensorFlow, PyTorch)",
      "Experience with NLP, computer vision, or predictive analytics",
      "Knowledge of cloud platforms (AWS, Azure, GCP)"
    ]
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Build and maintain our web applications and services as part of our product engineering team. You'll work across the entire stack to create seamless user experiences and robust backend systems.",
    responsibilities: [
      "Develop responsive web applications using modern frameworks",
      "Design and implement RESTful APIs and microservices",
      "Optimize application performance and scalability",
      "Implement security best practices",
      "Collaborate with UX/UI designers to implement intuitive interfaces"
    ],
    requirements: [
      "BS in Computer Science or equivalent experience",
      "4+ years of full stack development experience",
      "Proficiency with React, TypeScript, and Node.js",
      "Experience with cloud services and containerization",
      "Knowledge of database systems (SQL and NoSQL)"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote (US/Europe)",
    type: "Full-time",
    description: "Lead the strategy and execution of our AI product lines. You'll work with customers, engineering, and stakeholders to define product roadmaps and deliver solutions that address market needs.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize requirements based on market research",
      "Collaborate with engineering teams on feature implementation",
      "Drive product launches and go-to-market strategies",
      "Analyze product metrics and user feedback to guide improvements"
    ],
    requirements: [
      "BS/MS in Business, Computer Science, or related field",
      "5+ years of product management experience in SaaS or AI products",
      "Strong analytical skills and data-driven decision making",
      "Excellent communication and stakeholder management abilities",
      "Technical understanding of AI and cloud technologies"
    ]
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description: "Shape the user experience of our AI products, creating intuitive and accessible interfaces that make advanced technology approachable for enterprise users.",
    responsibilities: [
      "Create user flows, wireframes, and prototypes for web applications",
      "Design intuitive user interfaces for complex AI functionality",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with engineering on implementation"
    ],
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      "3+ years of UX/UI design experience for digital products",
      "Proficiency with design tools (Figma, Adobe XD)",
      "Experience with user research and testing methodologies",
      "Portfolio demonstrating strong design thinking"
    ]
  }
];

const CareerPositions = () => {
  const [filter, setFilter] = useState("All");
  
  const departments = ["All", "Engineering", "Product", "Design"];
  
  const filteredPositions = filter === "All" 
    ? positions 
    : positions.filter(position => position.department === filter);

  return (
    <section id="positions" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
          <p className="text-lg text-brand-slate/80">
            Join our team of talented professionals building the future of AI-powered enterprise solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <Button 
              key={dept}
              variant={filter === dept ? "default" : "outline"}
              onClick={() => setFilter(dept)}
              className="min-w-[100px]"
            >
              {dept}
            </Button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <GlassMorphicCard variant="subtle" className="p-0 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {filteredPositions.map((position) => (
                <AccordionItem key={position.id} value={position.id} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left pr-4">
                      <div>
                        <h3 className="text-xl font-semibold">{position.title}</h3>
                        <p className="text-brand-slate/70 text-sm">{position.department}</p>
                      </div>
                      <div className="flex gap-3 mt-2 md:mt-0">
                        <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="mb-6 text-brand-slate/80">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-brand-slate/80">
                        {position.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-brand-slate/80">
                        {position.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="mt-4 group">
                      Apply Now
                      <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassMorphicCard>
        </div>
      </div>
    </section>
  );
};

export default CareerPositions;
