export function RequiredCourseMaterials() {
  const books = [
    {
      title: "Core Sterile Processing Textbook",
      subtitle: "Required course material",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfqyv97vnZh1yhg0YXd15U1r6ZCmiSHM9MuoKslr9G2NJFDUSugJ4xjeq831eRUc0G5IwzcuI&usqp=CAc"
    },
    {
      title: "Workbook & Practice Material",
      subtitle: "Used for guided review",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8HKMex19HdWIjqaDKqdqvpvIWzSRQBV-H-kmdPdVl5IBsxtmpQwF1Cg5Y0WIJTqkQ0B5Hqo0"
    },
    {
      title: "Reference & Study Support",
      subtitle: "Helpful for certification prep",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6yol542UAulHSeeqTM7t-9pCp7D9UP31kTu9PogFQlvH8g-URyuuU6__rQKzdPEMPo6U4nXE"
    }
  ];

  return (
    <section className="mb-12">
      <div
        className="overflow-hidden rounded-2xl bg-white shadow-lg"
        style={{ border: "1px solid rgba(255,140,66,0.10)" }}
      >
        <div
          className="h-2"
          style={{ background: "linear-gradient(90deg,#FF8C42 0%,#003087 100%)" }}
        />

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2
              className="mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "28px",
                fontWeight: "700",
                color: "#FF8C42"
              }}
            >
              Required Course Materials
            </h2>

            <p
              style={{
                fontFamily: "Rubik, sans-serif",
                fontSize: "15px",
                opacity: "0.8"
              }}
            >
              Books used during the sterile processing training program.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {books.map((book, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white text-center"
                style={{
                  border: "1px solid rgba(0,48,135,0.08)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.05)"
                }}
              >
                <div className="p-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-60 w-full object-contain"
                  />
                </div>
                <div className="px-5 pb-6">
                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#003087"
                    }}
                  >
                    {book.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "14px",
                      opacity: "0.7"
                    }}
                  >
                    {book.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
