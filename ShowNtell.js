import React from 'react';
import './ShowNtell.css';
import Sidebar from '../../comman/Sidebar/Sidebar';
import Cards from '../../comman/Cards/Cards';

const data = [
    {
        "id": "EVE01",
        "name": "TPL",
        "descp": "Tricon's Twenty20 (T20) cricket league that is annually held in India and contested by various tricon teams.",
        "resLink": "",
        "img": "https://rb.gy/4jwh7p",
        "date": "20/11/2023",
        "venue": "cafeteria",
        "type": "event"
    },
    {
        "id": "EVE02",
        "name": "FSL",
        "descp": "Futuristic Soccer League featuring high-tech robotic soccer teams competing in a futuristic stadium.",
        "resLink": "",
        "img": "https://rb.gy/abc123",
        "date": "12/05/2023",
        "venue": "Tech Arena",
        "type": "event"
    },
    {
        "id": "EVE03",
        "name": "JAZZFEST",
        "descp": "Annual jazz music festival showcasing international and local jazz artists in a vibrant musical celebration.",
        "resLink": "",
        "img": "https://rb.gy/xyz789",
        "date": "08/12/2023",
        "venue": "Harmony Park",
        "type": "event"
    },
    {
        "id": "EVE04",
        "name": "Gastronomique Gala",
        "descp": "Culinary extravaganza featuring world-renowned chefs presenting their signature dishes in a grand gastronomic event.",
        "resLink": "",
        "img": "https://rb.gy/def456",
        "date": "29/11/2023",
        "venue": "Culinary Center",
        "type": "event"
    },
    {
        "id": "EVE05",
        "name": "Tech Summit",
        "descp": "Annual technology summit bringing together industry leaders, innovators, and enthusiasts for discussions and networking.",
        "resLink": "",
        "img": "https://rb.gy/ghi789",
        "date": "11/11/2023",
        "venue": "Innovation Hub",
        "type": "event"
    },
    {
        "id": "EVE06",
        "name": "Fashion Fusion",
        "descp": "Fashion showcase featuring cutting-edge designs and trends from renowned and emerging fashion designers.",
        "resLink": "",
        "img": "https://rb.gy/jkl012",
        "date": "07/05/2023",
        "venue": "Chic Pavilion",
        "type": "event"
    },
    {
        "id": "EVE07",
        "name": "Nature Retreat",
        "descp": "Annual nature retreat offering outdoor activities, workshops, and eco-friendly initiatives to connect with nature.",
        "resLink": "",
        "img": "https://rb.gy/mno345",
        "date": "06/10/2023",
        "venue": "Serene Meadows",
        "type": "event"
    },
    {
        "id": "show01",
        "name": "Introduction to Python",
        "descp": "An interactive session introducing the fundamentals of Python programming language.",
        "resLink": "",
        "img": "https://rb.gy/pqr678",
        "date": "11/06/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show02",
        "name": "Web Development Workshop",
        "descp": "Hands-on workshop on web development technologies and best practices.",
        "resLink": "",
        "img": "https://rb.gy/stu901",
        "date": "10/08/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show03",
        "name": "Machine Learning Showcase",
        "descp": "Showcasing real-world applications of machine learning algorithms and models.",
        "resLink": "",
        "img": "https://rb.gy/vwx234",
        "date": "09/09/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show04",
        "name": "Cloud Computing Expo",
        "descp": "Exploring the latest trends and technologies in cloud computing through live demonstrations.",
        "resLink": "",
        "img": "https://rb.gy/yzab56",
        "date": "23/11/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show05",
        "name": "Data Science Symposium",
        "descp": "A symposium on data science, featuring talks and presentations on data analysis and visualization.",
        "resLink": "",
        "img": "https://rb.gy/cdef78",
        "date": "26/11/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show06",
        "name": "Cybersecurity Insights",
        "descp": "Insights into the latest trends and best practices in cybersecurity.",
        "resLink": "",
        "img": "https://rb.gy/ghij90",
        "date": "07/02/2023",
        "venue": "Teams",
        "type": "showNtell"
    },
    {
        "id": "show07",
        "name": "DevOps Demystified",
        "descp": "Demystifying the principles and practices of DevOps for efficient software development.",
        "resLink": "",
        "img": "https://rb.gy/klmn12",
        "date": "06/05/2023",
        "venue": "Teams",
        "type": "showNtell"
    }
]

const ShowNtell = () => {
    return (
        <>
            <div className='showNtell'>
                <Sidebar />
                <div className='showNtell-list'>
                    {data.map((data, index) => (
                        data.type === 'showNtell' ?
                            <Cards
                                key={index}
                                title={data.name}
                                content={data.descp}
                                imageUrl={data.img}
                            /> : null
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShowNtell;