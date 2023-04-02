import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [inOrOut, setInOrOut] = useState(false);
  const [id, setId] = useState(0);
  const [info, setInfo] = useState({});
  const [yourTravel, setYourTravel] = useState({});
  const [address, setAddress] = useState("");
  const [allTravel, setAllTravel] = useState([]);
  const [otherUser, setOtherUser] = useState({});
  const [alertColour, setAlertColour] = useState("red");
  const [alertMsg, setAlertMsg] = useState("Added Successfully");
  const [alertShow, setAlertShow] = useState(false);
  const [modeType, setModeType] = useState("Any");
  const [userid, setUserid] = useState(id);

  const getProfile = async (userId) => {
    const response = await fetch("http://192.168.0.100:1000/get-mytravel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    const json = await response.json();
    setInfo(json.info[0]);
    setYourTravel(json.result);
  };

  const login = async (phone, email, password) => {
    const response = await fetch("http://192.168.0.100:1000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, email, password }),
    });
    const json = await response.json();
    setInOrOut(json.cred);
    getProfile(json.id);
    setId(json.id);
    setUserid(json.id);
    setAlertShow(true);
    if (json.id) {
      setAlertMsg("You have succefully login");
      setAlertColour("lightgreen");
    } else {
      setAlertMsg("Enter correct Credential");
      setAlertColour("#E84C3D");
    }
  };

  const signUp = async (name, phone, email, password) => {
    const response = await fetch("http://192.168.0.100:1000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, email, password }),
    });
    const json = await response.json();
    setInOrOut(json.cred);
    getProfile(json.id);
    setId(json.id);
    setUserid(json.id);
    setAlertShow(true);
    if (json.id) {
      setAlertMsg("Account created succefully");
      setAlertColour("lightgreen");
    } else {
      setAlertMsg("Enter correct Credential");
      setAlertColour("#E84C3D");
    }
  };

  const deleteTravel = async (id) => {
    const response = await fetch("http://192.168.0.100:1000/delete-mytravel", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    const newYourTravel = yourTravel.filter((travel) => {
      return travel._id !== id;
    });
    setYourTravel(newYourTravel);
    setAllTravel(newYourTravel);
    setAlertShow(true);
    if (json.cred) {
      getProfile(userid);
      setAlertMsg("Travel Deleted succefully");
      setAlertColour("lightgreen");
    } else {
      setAlertMsg("Some error has occur, Try again");
      setAlertColour("#E84C3D");
    }
  };

  const getTravel = async () => {
    const response = await fetch("http://192.168.0.100:1000/get-travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
    const json = await response.json();
    setAllTravel(json.result);
  };

  const otherUserDetail = async (id) => {
    const response = await fetch("http://192.168.0.100:1000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    setOtherUser(json.result[0]);
  };

  const addTravel = async (mode, source, destination, userId) => {
    const response = await fetch("http://192.168.0.100:1000/add-travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mode, source, destination, userId }),
    });
    const json = await response.json();
    setAlertShow(true);
    if (json.cred) {
      getProfile(id);
      setAlertMsg("Travel Added succefully");
      setAlertColour("lightgreen");
    } else {
      setAlertMsg("Some error has occur, Try again");
      setAlertColour("#E84C3D");
    }
  };

  const data = [
    {
      id: "1",
      title: "India",
      imgUrl:
        "https://balichalo.com/wp-content/uploads/header-angkor-archaeological-park-ANGKORWAT1219-1.jpg-1024x682.jpg",
      state: [
        {
          id: "1",
          title: "Maharashtra",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTlEgxViqAEFJn722AW6w3BDXWrZSU2YNMw&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Thane",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Durgadi_Fort_%2CKalyan%2C_Maharashtra_-_panoramio_%281%29.jpg/186px-Durgadi_Fort_%2CKalyan%2C_Maharashtra_-_panoramio_%281%29.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Palghar,",
            },
            {
              id: "3",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Raigad,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Pune,",
            },
          ],
        },
        {
          id: "2",
          title: "Uttar Pradesh",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW64flAHH34vEKhHYsXoJYuYIZC-SKm2Eo2_L-cQgxZMx-4xduQukXUIO-mhq6hdJAkiE&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Ayodhya",
              imgUrl:
                "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/11/ayodhya.jpg?fit=800%2C600&ssl=1",
              address: "India,Uttar Pradesh,Ayodhya,",
            },
            {
              id: "2",
              title: "Gorakhpur",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0Yd9tXbRoLc4rwcYh8w_QGr-xCQQx1Qit0G3TZIn7L9zNf8D-Rt0b0_mGNIQA1qQuaM&usqp=CAU",
              address: "India,Uttar Pradesh,Gorakhpur,",
            },
            {
              id: "3",
              title: "Kanpur",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3vZyl75kSwYVODm_yiXNGTnEqo3V-uF-nr6WxwHs4RPoko3T8agF0pYo8swJorEzPHw&usqp=CAU",
              address: "India,Uttar Pradesh,Kanpur,",
            },
            {
              id: "4",
              title: "Mirzapur",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyHoORDM1Oh725ANXeQC7om0X8PSTAg1SEzpJyLFEIKJ8kDac3W7bwZRFbuB-dWMM2ns&usqp=CAU",
              address: "India,Uttar Pradesh,Mirzapur,",
            },
          ],
        },
        {
          id: "3",
          title: "Rajasthan",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIV7MFKjIuPBhpr1RR1ftgkAy3MiwZ0mFW_JseZgWhvt7T1MwWs2bV5q9SpU8wJ4mh9M&usqp=CAU",
          district: [
            {
              id: "1",

              title: "Ajmer",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdjyxCN9udlyFKqyiJothiQwK44kUh3BHOlrF7K9TaZnSs1kMJWkwsvChkh4LKoS5fik&usqp=CAU",
              address: "India,Rajasthan,Ajmer,",
            },
            {
              id: "2",
              title: "Kota",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7skq6rPXtAA7k7MxraooPCUKke6qBe7Q8zjFYWp7HWn8Iaai3PzBUAnzL2I8TDhs8sI&usqp=CAU",
              address: "India,Rajasthan,Kota,",
            },
            {
              id: "3",
              title: "Udaipur",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCpqpAI6Jx8Fu_KxpY3HBNnM7GQTEjK11LwDuejo3zfixdzlFGUt5EUuX6EO7rB9L3gk&usqp=CAU",
              address: "India,Rajasthan,Udaipur,",
            },
            {
              id: "4",
              title: "Jaipur",
              imgUrl:
                "https://images.news18.com/ibnlive/uploads/2022/05/albert-hall-museum-jaipur-city-165279598016x9.jpg",
              address: "India,Rajasthan,Jaipur,",
            },
          ],
        },
        {
          id: "4",
          title: "Goa",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlTZri0OUMMI17PcFyoaO0j8a1gPmSQEycXILyS2CEEGUumhkENahmLxBDXvUSgAABWw&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Panji",
              imgUrl: "https://i.ytimg.com/vi/vC13F967Xtc/maxresdefault.jpg",
              address: "India,Goa,Panji,",
            },
            {
              id: "2",
              title: "Madgaon",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GQIYr6jxrEHI9fOnrlewHxxgRDtWRQTSoYo2Qbj-IPVL4Y6cc88Wrc7StFKcTxyc03w&usqp=CAU",
              address: "India,Goa,Madgaon,",
            },
            {
              id: "3",
              title: "Bicholim",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYd9mLY6r30pVxBrxM3-64dq2bZ3LtYFvBgd6hMm1NE2DR1eoIa4g9Bqt5gLPYxg3wRE&usqp=CAU",
              address: "India,Goa,Bicholim,",
            },
            {
              id: "4",

              title: "Sattari",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCr9FUF6aAEnFcWwVqFi_iznX9khhATgTda5oqkq639SjAV_dOooO-kwLjYa7co2a_WJ0&usqp=CAU",
              address: "India,Goa,Sattari,",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "France",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2HiuRqULgKz2cbnNTK1B_UD1s1oMP1AZ8OTlXLaji90uY4rJBbziF9TzwaaYR9fMNts&usqp=CAU",
      state: [
        {
          id: "1",
          title: "Auvergne-Rhône",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebf0PDyvAk7zyXmXQsqpe-o8R8sKsmnL5RJyrJa2k1Rhw8HeL-g7ayFtwt7Z56SXIXVI&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Lyon",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TjYgPB3nGmEAbW60vUh-bHsr5nzVZubmdslkJ8mv0IAmk0jSaGN_ATFcboAcq9TWEfg&usqp=CAU",
              address: "France,Auvergne-Rhône-Alpes,Lyon,",
            },
            {
              id: "2",
              title: "Annecy",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-fjhLNuZEIpt1qD7KnpBJE0w2lFNjW97rD0ZgowDSLYyI7vRDPWvDfYaaFRzzNTELoc&usqp=CAU",
              address: "France,Auvergne-Rhône-Alpes,Annecy,",
            },
            {
              id: "3",
              title: "Aurillac",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtST2Y0_NpU7roHYHjigPuIIUOhL-Hpz2M9qejJMYWjgFvQKaMwFluY_Nel9Uwc2C7bA&usqp=CAU",
              address: "France,Auvergne-Rhône-Alpes,Aurillac,",
            },
            {
              id: "4",
              title: "Chambéry",
              imgUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuAsIC3pb656HbLZiwTntMGxwfJMzZdX2KzrhwsgvSmAEq88u5bbblme1NmKLbaTERaQ&usqp=CAU",
              address: "France,Auvergne-Rhône-Alpes,Chambéry,",
            },
          ],
        },
        {
          id: "2",
          title: "Bourgogne-Franche",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGqPGlWb7OVNMSKxpJnsSve9D36Cdq-uXyEcxcogIAmox_hsRHrOeQ18ug4oq3F5cwkg&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Bourgogne-Franche-Comté,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Bourgogne-Franche-Comté,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Bourgogne-Franche-Comté,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Bourgogne-Franche-Comté,Thane,",
            },
          ],
        },
        {
          id: "3",
          title: "Brittany",
          imgUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/1a/brittany.jpg?w=1600&h=900&s=1",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "4",
          title: "Corsica",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7b06bjWA1cEHW7CJOATcrX63pztHtIgMHxOSGgMkv_xRMl5-6J9o1EbBJOCitG2QRq8&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Nepal",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCpp3NiLh6wt1Dr_gAaq5xHdVw-74_H7lfSBrU-BdAkDc0rlb7HNhZQboqJGifhkr5fs&usqp=CAU",
      state: [
        {
          id: "1",
          title: "Maharashtra",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTlEgxViqAEFJn722AW6w3BDXWrZSU2YNMw&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "2",
          title: "Uttar Pradesh",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW64flAHH34vEKhHYsXoJYuYIZC-SKm2Eo2_L-cQgxZMx-4xduQukXUIO-mhq6hdJAkiE&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "3",
          title: "Goa",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlTZri0OUMMI17PcFyoaO0j8a1gPmSQEycXILyS2CEEGUumhkENahmLxBDXvUSgAABWw&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "4",

          title: "Rajasthan",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIV7MFKjIuPBhpr1RR1ftgkAy3MiwZ0mFW_JseZgWhvt7T1MwWs2bV5q9SpU8wJ4mh9M&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      title: "Africa",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOozQ5OrsK4qLwvFXRocOLVsiBgMFThMmTODPp-wP5NGUecccQ_iMfepZ_sHWoijD75w&usqp=CAU",
      state: [
        {
          id: "1",
          title: "Uttar Pradesh",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW64flAHH34vEKhHYsXoJYuYIZC-SKm2Eo2_L-cQgxZMx-4xduQukXUIO-mhq6hdJAkiE&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "2",
          title: "Maharashtra",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTlEgxViqAEFJn722AW6w3BDXWrZSU2YNMw&usqp=CAU",

          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "3",
          title: "Rajasthan",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIV7MFKjIuPBhpr1RR1ftgkAy3MiwZ0mFW_JseZgWhvt7T1MwWs2bV5q9SpU8wJ4mh9M&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
        {
          id: "4",
          title: "Goa",
          imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlTZri0OUMMI17PcFyoaO0j8a1gPmSQEycXILyS2CEEGUumhkENahmLxBDXvUSgAABWw&usqp=CAU",
          district: [
            {
              id: "1",
              title: "Palghar",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jaivilas_Palace%2C_Jawhar.jpg/186px-Jaivilas_Palace%2C_Jawhar.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "2",
              title: "Raigad",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Elephanta_Cave_3_2.jpg/480px-Elephanta_Cave_3_2.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "3",
              title: "Satara",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg/320px-Chhatrapati_Shahu_Maharaj_hunting_with_his_Peshwa_Balaji_Bajirao.jpg",
              address: "India,Maharashtra,Thane,",
            },
            {
              id: "4",
              title: "Pune",
              imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Statue_of_Bajirao_I.jpg/480px-Statue_of_Bajirao_I.jpg",
              address: "India,Maharashtra,Thane,",
            },
          ],
        },
      ],
    },
  ];

  const Mode = [
    {
      id: "1",
      title: "Any",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzfVdpXffxeNB6DslFGOGGIfKsr_l66nachAJHj2vIRfkeuPeaTh3OV2S9VzmrbvAaek&usqp=CAU",
    },
    {
      id: "2",
      title: "Car",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkeDJgbSl-FYUQPBnKZAwxFaKqu-usf-f72z30YgVz8fU-hppwrXa_50T3qiT0l1BTbg&usqp=CAU",
    },
    {
      id: "3",
      title: "Bike",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUkAyDAOMZbW3oh2aPlkYCVFmAaMxZC9qoTaNM1MzWkESP42m-cLDsVAVuYCNQ-tOZJU&usqp=CAU",
    },
    {
      id: "4",
      title: "Train",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEetsHaZOnGr3gBr1DvPo_zZOYsmuQ5GtNZHM9v0bPbEIFUKAyidnsq_q680ZQJIuTcM&usqp=CAU",
    },
    {
      id: "5",
      title: "Auto",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQep_0fQy9uROfe7vOzmes1ZcBvr-rMqypqdlLd3VLI2FND0KykwJCmz9Xw925oqOkkROQ&usqp=CAU",
    },
    {
      id: "6",
      title: "Taxi",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvV-hAlRdb4c20NgZJS9WkrI1mfPzhYTRRJS0yyzzt3W0RMam_BklQLwvd2iP4_oYlGw&usqp=CAU",
    },
    {
      id: "7",

      title: "Walking",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpR31wQbdSjD1Apj2Q8Ojgkdad72yA90ZUgwFbDhNWkE0IxbiYiVgWN6gUtjPwrdeuuqA&usqp=CAU",
    },
    {
      id: "8",
      title: "Plane",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCTlK8DwgEcOoBrgsdX6yXUMHMdgUWMxh7TDco7LjZ8qNBtivY3lPXnarTcvklGSGLRQ&usqp=CAU",
    },
  ];

  return (
    <UserContext.Provider
      value={{
        getTravel,
        allTravel,
        inOrOut,
        setInOrOut,
        id,
        login,
        signUp,
        info,
        yourTravel,
        deleteTravel,
        addTravel,
        otherUserDetail,
        otherUser,
        alertColour,
        alertMsg,
        alertShow,
        setAlertShow,
        address,
        setAddress,
        data,
        Mode,
        modeType,
        setModeType,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
