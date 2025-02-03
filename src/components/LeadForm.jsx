import React, { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "",
      businessEmail: "",
      companyName: "",
      websiteUrl: "",
      industry: "",
      itServiceNeeded: "",
      projectNeeds: "",
      preferredContactMethod: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Full Name: " + values.fullName + "\n\n";
    emailBody += "Business Email: " + values.businessEmail + "\n\n";
    emailBody += "Company Name: " + values.companyName + "\n\n";
    emailBody += "Website URL: " + values.websiteUrl + "\n\n";
    emailBody += "Industry: " + values.industry + "\n\n";
    emailBody += "IT Service Needed: " + values.itServiceNeeded + "\n\n";
    emailBody += "Project Needs: " + values.projectNeeds + "\n\n";
    emailBody += "Preferred Contact Method: " + values.preferredContactMethod;

    // Construct the request payload
    var payload = {
      to: "remeesreme4u@gmail.com",
      // to: companyDetails.email,
      subject: "New Lead Form Submission",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="flex flex-col gap-4 py-[5rem] px-5 bg-primary/5">
      <h2
        data-aos="fade-up"
        className="heading-2 text-center max-w-[55rem] mx-auto"
      >
        Ready to ignite your brand's fire? <br />
        Let's connect!
      </h2>
      <p data-aos="fade-up" className="desc text-center max-w-[55rem] mx-auto">
        At Brainways Tech, we believe in the power of collaboration and shared
        passion. We're not just a team of developers, we're your partners in
        igniting your brand's unique potential. So, whether you're brimming with
        ideas or just starting to spark, reach out and let's chat!
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col gap-4 rounded-xl p-5 bg-white shadow-xl w-full max-w-4xl mx-auto mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Full Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.fullName?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Business Email/Gmail</label>
            <input
              type="email"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Business Email/Gmail"
              {...register("businessEmail", {
                required: "Business email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">
              {errors.businessEmail?.message}
            </small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Company Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Company Name"
              {...register("companyName", {
                required: "Company name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Company name is required";
                  }
                },
              })}
            />
            <small className="error-message">
              {errors.companyName?.message}
            </small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Website URL</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Website URL"
              {...register("websiteUrl", {
                required: "Website URL is required",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                  message: "Entered URL is invalid",
                },
              })}
            />
            <small className="error-message">
              {errors.websiteUrl?.message}
            </small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Industry</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Industry"
              {...register("industry", {
                required: "Industry is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Industry is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.industry?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">What IT service do you need?</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="IT Service Needed"
              {...register("itServiceNeeded", {
                required: "IT service needed is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "IT service needed is required";
                  }
                },
              })}
            />
            <small className="error-message">
              {errors.itServiceNeeded?.message}
            </small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">Describe your project needs</label>
          <textarea
            rows="4"
            className="outline-none p-2 rounded-2xl bg-white/60 text-black border"
            placeholder="Describe your project needs"
            {...register("projectNeeds", {
              required: "Project needs description is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Project needs description is required";
                }
              },
            })}
          />
          <small className="error-message">
            {errors.projectNeeds?.message}
          </small>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">Preferred Contact Method</label>
          <select
            className="outline-none p-2 rounded-full bg-white/60 text-black border"
            {...register("preferredContactMethod", {
              required: "Preferred contact method is required",
            })}
          >
            <option value="">Select Contact Method</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="WhatsApp Chat">WhatsApp Chat</option>
          </select>
          <small className="error-message">
            {errors.preferredContactMethod?.message}
          </small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-3 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
