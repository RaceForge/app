export const FeatureGrid = () => {
  const features: Feature[] = [
    {
      icon: "🧠",
      title: "AI-Powered Setup Diagnosis", 
      text: "Get data-driven tweaks in seconds. Upload your setup sheet and track photo, and let our AI do the rest.",
    },
    {
      icon: "📄",
      title: "Smart Setup Sheet Uploads",
      text: "Drop in a PDF or image of your setup — we’ll parse and learn from it automatically.",
    },
    {
      icon: "📷",
      title: "Track Photo Intelligence",
      text: "Upload a picture of the track and get surface-aware tuning recommendations.",
    },
    {
      icon: "🔁",
      title: "Change Tracking & History",
      text: "Every tweak is logged — know what worked at each track, layout, and weather change.",
    },
    {
      icon: "📈",
      title: "Theory + Feedback Mode",
      text: "Not sure what anti-squat does? We’ll teach as you tune — optional explanations included.",
    },
    {
      icon: "🛠️",
      title: "Direct-to-Print Parts (w/ RaceForge Fab)",
      text: "When the AI recommends a part change, order it printed and shipped in 1 click.",
    },
  ]
  return (<section className="w-full max-w-6xl px-6 py-24 mx-auto text-white">
    <h2 className="text-4xl font-bold text-center mb-8 text-[#9eff00]">Why Join RaceForge Intel</h2>
    <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">Designed for serious racers who want faster laps, fewer guesses, and smarter tuning decisions.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div className="bg-[#1f1f1f] p-6 rounded-xl border border-gray-800 hover:border-[#9eff00] transition">
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.text}</p>
        </div>
      ))}

    </div>

  </section>)
}

interface Feature {
  icon: string
  title: string
  text: string
}