import React, { useContext } from "react";
import SubHeading from "../SubHeading";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../constant";

const ContactForm = () => {
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
      to: companyDetails.email,
      subject: "New Contact Form Submission",
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
    <div
      id="contact"
      className="py-[5rem] bg-secondary/5 bg-[100%_40%] relative min-h-[40rem] flex items-center"
    >
      <div className="absolute top-0 w-full h-full bg-white/70"></div>
      <div className="wrapper relative z-10 w-full">
        <div className="flex flex-col items-center gap-5">
          <SubHeading heading="Contact Us" />
          <h2
            data-aos="fade-up"
            className="heading-2 max-w-[60rem] mx-auto font-light text-center"
          >
            Get In Touch With Us!
          </h2>
          <p data-aos="fade-up" className="desc text-center max-w-[60rem]">
            Let Brainways Tech be the catalyst for your digital transformation.
            Together, we can build solutions that are as dynamic as your vision,
            helping your business reach new heights.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          data-aos="fade-up"
          className="flex flex-col max-w-xl mx-auto gap-4 mt-7"
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
            <input
              type="email"
              placeholder="Business Email/Gmail"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Company Name"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
            <input
              type="url"
              placeholder="Website URL"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              // {...register("websiteUrl", {
              //   required: "Website URL is required",
              //   pattern: {
              //     value:
              //       /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
              //     message: "Entered URL is invalid",
              //   },
              // })}
            />
            <small className="error-message">
              {errors.websiteUrl?.message}
            </small>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Industry"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
            <input
              type="text"
              placeholder="What IT service do you need?"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
          <div className="flex flex-col gap-1">
            <textarea
              rows="3"
              placeholder="Describe your project needs"
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
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
            <select
              className="outline-none border-secondary border bg-background/80 p-2 rounded-sm shadow-large shadow-secondary/5"
              {...register("preferredContactMethod", {
                required: "Preferred contact method is required",
              })}
            >
              <option value="">
                Preferred Contact Method (Call/Email/WhatsApp Chat)
              </option>
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
            className="secondary-btn mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
