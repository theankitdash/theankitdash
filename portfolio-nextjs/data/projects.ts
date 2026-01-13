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
        id: '1',
        title: 'n8n Automation Workflows',
        description: 'Projects that you can deploy & use in your day-to-day lives coming soon!',
        githubUrl: '',
        skills: ['n8n', 'Automation', 'Workflow'],
        videoUrl: '',
        featured: false,
        upcoming: true
    },
    {
        id: '2',
        title: 'Interactive Multimodal AI Buddy – An AI Companion for Real-Time, Emotion-Aware Conversations',
        description: 'Architected a live-streaming AI companion integrating speech, vision, LangChain memory, and vector DB, delivering personalized interactions with ~85% emotion recognition and ~3s latency and 50+ managed events.',
        githubUrl: 'https://github.com/theankitdash/Interactive-Multimodal-AI-Buddy-An-AI-Companion-for-Real-Time-Emotion-Aware-Conversations',
        skills: ['Python', 'LangChain', 'Vector DB', 'Speech Recognition', 'Computer Vision', 'AI/ML'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '3',
        title: 'AI Nutritional Health Assistant: Personalized Guidance for Indian Diets',
        description: 'Built an AI-powered nutrition chatbot using FastAPI and LangChain with a RAG pipeline (FAISS) to deliver 90% accurate, personalized nutrition advice across 100+ context-aware queries and 4+ Indian regional cuisines.',
        githubUrl: 'https://github.com/theankitdash/AI-Nutritional-Health-Assistant-Personalized-Guidance-for-Indian-Diets',
        skills: ['FastAPI', 'LangChain', 'RAG', 'FAISS', 'Python', 'AI/ML'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '4',
        title: 'Personal Chatbot: Deva - AI Buddy Companion',
        description: 'Developed an AI chatbot using Mistral-7B and Gradio with LangChain-ready architecture, enhanced with memory capabilities for supporting 1000+ conversations, emotion-aware responses, and personalized engagement.',
        githubUrl: 'https://github.com/theankitdash/Personal-Chatbot-Deva-AI-Buddy-Companion',
        skills: ['Mistral-7B', 'Gradio', 'LangChain', 'Python', 'AI/ML'],
        videoUrl: '', // User will add later
        featured: false
    },
    {
        id: '5',
        title: 'Personal Finance System for Expense Tracking and Analysis',
        description: 'Engineered a containerized analytics engine with multivariate anomaly detection (LOF, OneClass SVM, deep autoencoder), forecasting, drift analysis, and semantic clustering via REST APIs, delivering results in ∼3s on 10,000+ transactions.',
        githubUrl: 'https://github.com/theankitdash/Personal-Finance-System-for-Expense-Tracking-and-Analysis',
        skills: ['Python', 'Machine Learning', 'Docker', 'REST API', 'Data Analytics'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '6',
        title: 'Administrator Controlled Timetable Based Automatic Facial Recognition Attendance System',
        description: 'Developed an ESP32-CAM-based facial recognition system with OpenCV for automated, timetable-linked attendance of 50+ students, achieving 85% accuracy and winning Best Presentation at SYMPOSIUM-2023.',
        githubUrl: 'https://github.com/theankitdash/Administrator-controlled-Timetable-based-Automatic-Facial-Recognition-Attendance-System',
        skills: ['ESP32-CAM', 'OpenCV', 'Python', 'Computer Vision', 'IoT'],
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
