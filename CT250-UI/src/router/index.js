import { createWebHistory, createRouter } from "vue-router";


const routes = [
    {
        path: "/",
        name: "home_page",
        component: () => import("@/views/UserHomePage.vue"),
    },
    {
        path: "/lessor",
        name: "lessor home page",
        component: () => import("@/views/LessorHomePage.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/myroom",
        name: "myroom",
        component: () => import("@/views/MyRoom.vue"),
    },
    {
        path: "/my-rooming-house",
        name: "my rooming house",
        component: () => import("@/views/MyRoomingHouse.vue"),
    },
    {
        path: "/rooming-houses/:id",
        name: "rooming house info",
        component: () => import("@/views/RoomingHouseInfo.vue"),
    },
    {
        path: "/rooms/:id",
        name: "room info",
        component: () => import("@/views/RoomInfo.vue"),
    },
    {
        path: "/personal-page/:id",
        name: "personal page",
        component: () => import("@/views/PersonalPage.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Admin.vue"),
    },
    {
        path: "/my-users",
        name: "my users",
        component: () => import("@/views/MyUsers.vue"),
    },
    {
        path: "/manage",
        name: "manage",
        component: () => import("@/views/Manage.vue"),
    },
    {
        path: "/personal-information",
        name: "personal information",
        component: () => import("@/views/PersonalInformation.vue"),
    },
    {
        path: "/lessor-personal-information",
        name: "lessor personal information",
        component: () => import("@/views/LessorPersonalInformation.vue"),
    },
    {
        path: "/contacts",
        name: "contacts",
        component: () => import("@/views/Contacts.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;