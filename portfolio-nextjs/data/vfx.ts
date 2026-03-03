export interface VFXItem {
    id: number;
    title: string;
    description: string;
    type: 'video' | 'image';
    url: string; // URL to image or video
    thumbnail?: string; // Optional thumbnail for videos
}

export const vfxItems: VFXItem[] = [
    {
        id: 1,
        title: "Airplane Render",
        description: "A detailed 3D render animation of an airplane in flight.",
        type: 'video',
        url: "/vfx/Airplane0001-0240.mp4",
    },
    {
        id: 2,
        title: "Temple Drone",
        description: "A cinematic drone shot of a temple.",
        type: 'video',
        url: "/vfx/Temple Drone.mp4",
    }
];

export const getFeaturedVFX = () => {
    return vfxItems.slice(0, 3);
};
