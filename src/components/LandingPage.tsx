import { useCallback, useSignal } from "kaioken"
import { useForm } from "kaioken/form"
import { FeatureGrid } from "./FeatureGrid"

export default function LandingPage() {
  const success = useSignal(false)

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async ({ state }) => {
      console.log("form submitted", state.email)
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          name: state.name,
        }),
      })
      form.reset()
      success.value = true
    },
  })

  const handleSubmit = useCallback(
    (e: Event) => {
      e.preventDefault()
      form.handleSubmit()
      console.log("form", form.getFieldState("name"))
      console.log("form", form.getFieldState("email").isValidating)
    },
    [form]
  )

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center px-4">
      <FeatureGrid />
      {success.value ? (
        <div className="bg-[#1f1f1f] rounded-2xl p-8 shadow-2xl text-center max-w-md w-full">
          <h2 className="text-2xl font-semibold text-[#9eff00] mb-4">
            You’re in! ✅
          </h2>
          <p className="text-gray-300">Thanks for signing up.</p>
        </div>
      ) : (
        <form
          onsubmit={handleSubmit}
          className="bg-[#1f1f1f] rounded-2xl p-8 shadow-2xl w-full max-w-md space-y-6"
        >
          <form.Field
            name="name"
            validators={{
              onChange: (value) => (!value ? "Name is required" : undefined),
            }}
          >
            {(field) => (
              <div className="flex flex-col text-left">
                <label
                  htmlFor={field.name}
                  className="mb-2 text-sm font-semibold text-gray-200"
                >
                  Name
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onblur={field.handleBlur}
                  onchange={(e) => field.handleChange(e.target.value)}
                  className="bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#9eff00] focus:ring-1 focus:ring-[#9eff00] transition"
                />
                {field.state.errors.length > 0 && (
                  <span className="text-sm text-red-400 mt-2">
                    {field.state.errors.join(", ")}
                  </span>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: (email) =>
                !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email.value) &&
                "Valid email required",
            }}
          >
            {(field) => (
              <div className="flex flex-col text-left">
                <label
                  htmlFor={field.name}
                  className="mb-2 text-sm font-semibold text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onblur={field.handleBlur}
                  onchange={(e) => field.handleChange(e.target.value)}
                  className="bg-[#141414] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#9eff00] focus:ring-1 focus:ring-[#9eff00] transition"
                />
                {field.state.errors.length > 0 && (
                  <span className="text-sm text-red-400 mt-2">
                    {field.state.errors.join(", ")}
                  </span>
                )}
              </div>
            )}
          </form.Field>

          <button
            type="submit"
            className="w-full bg-[#9eff00] text-[#141414] font-bold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition disabled:opacity-50"
            disabled={form.getFieldState("name").errors.length > 0}
          >
            Get Early Access
          </button>
        </form>
      )}
    </div>
  )
}
