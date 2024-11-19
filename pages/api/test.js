export default function handler(request, response) {
    if (request.method == "POST") {
        return response.status(200).json("처리완료");
    }
    return response.status(200).json("반가워");
}
