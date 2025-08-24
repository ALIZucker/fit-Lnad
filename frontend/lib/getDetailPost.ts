import {dataproduct} from "@/type/next-auth";
import axios from "axios";

export async function getDetailPost(projectName: string)  {
    try {
        const response = await axios.post<any>(
            "http://127.0.0.1:8080/products/detailsPost",
            { projectName } // بادی POST
        );

        return response.data.filtered[0];

    } catch (err) {
        console.error("Error fetching product detail:", err);
        return null; // بهتره همیشه چیزی برگردونی
    }
}
