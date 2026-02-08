export interface Project {
    id: string;
    title: string;
    description: string;
    githubUrl: string;
    skills: string[];
    videoUrl?: string; // Optional - user will add later
    featured?: boolean;
    upcoming?: boolean;
}

export const projects: Project[] = [
    {
        id: '6',
        title: 'Home Data Server',
        description: 'Cloud Data Systems that can be hosted in home to provide various services like Media Streaming, File Storage, Automation etc.',
        githubUrl: '',
        skills: ['Ubuntu', 'Raspberry Pi', 'Data Engineering', 'Docker', 'Automation'],
        videoUrl: '', // User will add later
        featured: false,
        upcoming: true
    },
    {
        id: '5',
        title: 'Multi Modal AGI',
        description: 'Working on the MultiModal Assistant for Human like Experience!',
        githubUrl: '',
        skills: ['Ubuntu', 'Raspberry Pi', 'IoT', 'Docker', 'Automation'],
        videoUrl: '', // User will add later
        featured: false,
        upcoming: true
    },
    {
        id: '4',
        title: 'Interactive Multimodal AI Buddy – An AI Companion for Real-Time, Emotion-Aware Conversations',
        description: 'Architected a emotion-aware AI companion with live voice and facial understanding, agentic reasoning pipelines, and persistent memory—delivered as a desktop application with ∼5s conversational latency.',
        githubUrl: 'https://github.com/theankitdash/Interactive-Multimodal-AI-Buddy-An-AI-Companion-for-Real-Time-Emotion-Aware-Conversations',
        skills: ['Gemini', 'LangGraph', 'Agent Reasoning', 'Speech Recognition', 'Multi-Agent Systems'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '3',
        title: 'AI Nutritional Health Assistant: Personalized Guidance for Indian Diets',
        description: 'Built an AI-powered nutrition chatbot using FastAPI and LangGraph with a RAG pipeline (FAISS) to deliver 90% accurate, personalized nutrition advice across 100+ context-aware queries and 4+ Indian regional cuisines.',
        githubUrl: 'https://github.com/theankitdash/AI-Nutritional-Health-Assistant-Personalized-Guidance-for-Indian-Diets',
        skills: ['FastAPI', 'LangGraph', 'RAG', 'FAISS', 'LLM'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '2',
        title: 'Personal Finance System for Expense Tracking and Analysis',
        description: 'Engineered a containerized analytics engine with multivariate anomaly detection (LOF, OneClass SVM, deep autoencoder), forecasting, drift analysis, and semantic clustering via REST APIs, delivering results in ∼3s on 10,000+ transactions.',
        githubUrl: 'https://github.com/theankitdash/Personal-Finance-System-for-Expense-Tracking-and-Analysis',
        skills: ['PyTorch', 'Machine Learning Algorithms', 'Statistical Data Analysis', 'REST APIs', 'Docker'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '1',
        title: 'Administrator Controlled Timetable Based Automatic Facial Recognition Attendance System',
        description: 'Developed an ESP32-CAM-based facial recognition system with OpenCV for automated, timetable-linked attendance of 50+ students, achieving 85% accuracy and winning Best Presentation at SYMPOSIUM-2023.',
        githubUrl: 'https://github.com/theankitdash/Administrator-controlled-Timetable-based-Automatic-Facial-Recognition-Attendance-System',
        skills: ['Python', 'Computer Vision', 'Pattern Recognition', 'ESP32 CAM', 'MySQL'],
        videoUrl: '', // User will add later
        featured: false
    }

];

export const getFeaturedProjects = (): Project[] => {
    return projects.filter(p => p.featured);
};

export const getAllProjects = (): Project[] => {
    return projects;
};

export const getUpcomingProjects = (): Project[] => {
    return projects.filter(project => project.upcoming === true);
};

export const getCompletedProjects = (): Project[] => {
    return projects.filter(project => !project.upcoming);
};
