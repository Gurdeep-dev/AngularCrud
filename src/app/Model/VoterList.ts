export interface Voter {
    id: number;
    epicNumber: string;
    fullName: string;
    fatherName: string;
    dOB: string;
    gender: string;
    mobile: string;
    email: string;
    stateId: number;
    cityId: number;
    stateName: string;
    cityName: string;
    address: string;
    constituency: string;
    booth: string;
    districtId: number;
    districtName: string;
    pinCode: string;
}

export interface VoterRequest
{
    name: string
    status:boolean
}

export interface ApiResponse
{
    isSuccess:boolean;
    message:string
}
