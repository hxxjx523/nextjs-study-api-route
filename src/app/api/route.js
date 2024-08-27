// 내보낼 함수의 이름이 예약어처럼 쓰이므로 함수 이름 오타 주의
export async function GET(req) {
    return Response.json({ message: "GET" })
}

export async function POST(req) {
    return Response.json({ message: "POST" })
}
