export class Doctor {

    id: any;
    name: string;
    picUrl: string;
    regNo: string;
    briefDescription: {
        speciality: string;
        experience: string;
        description: string;
    };
    contact: {
        email: string;
        phone: string;
    };
    status: string;
    waitingTime: number;
    rating: number;
    videoUrl: string;
    appearUrl: string;
    thumbnailUrl: string;
    lastUpdatedTime: string;
}
