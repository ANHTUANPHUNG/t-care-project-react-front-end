

import axios from "axios";
import { toast } from "react-toastify";
const PREFIX = "http://localhost:8080/api";
const EmployeeServiceAPI = {
    getRatesTopThree: async () => {
        return axios
            .get(PREFIX + "/rates/top3")
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    signInEmployee: async (postData,navigate,url) => {
        return axios
            .post(PREFIX + "/auth/employees/account", postData)
            .then((resp) => {
                console.log(resp.data);
                toast.success("Tài khoản được tạo thành công");
                navigate(url + "/" + resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateLocation: async (id, postData, navigate, url) => {
        return axios
            .put(PREFIX + "/employees/location/" + id, postData)
            .then((resp) => {
                toast.success("Tài khoản được tạo thành công");
                navigate(url + "/" + id);
            })
            .catch((err) => {
               console.error("Lỗi khi gửi POST request:", err);
               navigate(`/assistant/process`);
               toast.error("Lỗi khi gửi thông tin vị trí");
            });
    },
};
export default EmployeeServiceAPI;
