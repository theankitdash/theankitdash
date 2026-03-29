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
        description: ' Architected an emotion-aware AI companion (Electron + FastAPI) with a dual-WebSocket pipeline bridging Gemini 2.5 flash audio streaming, a LangGraph reasoning pipeline (LoRA + DPO fine-tuned Mistral 7B), FaceNet-PyTorch facial auth, and pgvector semantic memory at ∼5s conversational latency.',
        githubUrl: 'https://github.com/theankitdash/Interactive-Multimodal-AI-Buddy-An-AI-Companion-for-Real-Time-Emotion-Aware-Conversations',
        skills: ['Multi-Agent Systems', 'Vision Analysis', 'Agent Reasoning', 'LoRA Fine-Tuning', 'Reinforcement Learning'],
        videoUrl: '', // User will add later
        featured: true
    },
    {
        id: '3',
        title: 'AI Nutritional Health Assistant: Personalized Guidance for Indian Diets',
        description: 'Designed an agentic nutrition assistant (FastAPI + Next.js, LangGraph) with two-stage hybrid retrieval (BM25 + FAISS→RRF→cross-encoder re-ranking), 25+ health metric computations, and Gemma-3-27b via NVIDIA NIM- achieving 90% accuracy vs ∼62% naive search across 100+ real-world health scenarios.',
        githubUrl: 'https://github.com/theankitdash/AI-Nutritional-Health-Assistant-Personalized-Guidance-for-Indian-Diets',
        skills: ['FastAPI', 'LangGraph', 'Hybrid RAG', 'FAISS', 'LLM'],
        videoUrl: '', // User will add later
        featured: false
    },
    {
        id: '2',
        title: 'Personal Finance System for Expense Tracking and Analysis',
        description: ' Engineered a containerized ML platform (FastAPI + Node.js, Docker Compose) with multivariate anomaly detection (LOF, One-Class SVM, PyTorch autoencoder), category-level forecasting (XGBoost/RF/GBM), Jensen Shannon drift detection, and semantic clustering via REST APIs- processing 10,000+ transactions in ∼3s.',
        githubUrl: 'https://github.com/theankitdash/Personal-Finance-System-for-Expense-Tracking-and-Analysis',
        skills: ['PyTorch', 'Machine Learning Algorithms', 'Statistical Data Analysis', 'REST APIs', 'Docker'],
        videoUrl: '', // User will add later
        featured: false
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
