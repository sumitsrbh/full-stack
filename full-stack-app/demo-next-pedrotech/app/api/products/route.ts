export async function GET() {
  return Response.json({
    products: [
      { id: 1, name: "iPhone 17" },
      { id: 2, name: "MacBook Pro" },
      { id: 3, name: "AirPods Pro" },
    ],
  });
}

// export async function POST(request: Request) {
//   ...
// }