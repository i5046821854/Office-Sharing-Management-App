import { http } from '../http.js';

const RentalService = {
    //현재 대여 가능한 공간 조회
    getRentalSpace: async () => {
        const response = await http.get(`/api/place`);
        return response.data;
    },

    //특정 공간 대여 가능한 시간대 조회
    getRentalHours: async (placeIdx) => {
        const response = await http.get(`/api/place/${placeIdx}`);
        return response.data;
    },

    //대여 시간대 신청
    postReservation: async (placeIdx, data) => {
        const response = await http.post(`/api/place/reservation/${placeIdx}`, {
            data,
        });
        return response.data;
    },
};

export { RentalService };