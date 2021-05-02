
export default interface IService {
    name: string,
    status: {
        name: string,
        url: string,
        addTime: {
            epochSecond: number,
            nano: number,
        }
        status: string
    },
};
