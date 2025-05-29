import { db } from "@/lib/db"

export default async function Home() {
  const courses = await db.course.findMany()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Cursos Disponíveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <span className="text-green-600 font-bold">R$ {course.price}</span>
          </div>
        ))}
      </div>
    </main>
  )
}
