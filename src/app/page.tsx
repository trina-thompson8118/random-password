"use client";
import React, { useState, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Home Component: Main page of the application.
 */
export default function Home() {
  // State to manage the slider value (password length)
  const [sliderValue, setSliderValue] = useState(15);

  // State for checkboxes
  const [uppercaseAlpha, setUppercaseAlpha] = useState(true);
  const [lowercaseAlpha, setLowercaseAlpha] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    generatePassword();
  }, [sliderValue, uppercaseAlpha, lowercaseAlpha, numbers, specialCharacters]);

  // Handle changes in the slider and update the state
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  // Handle changes for each check box
  const handleUppercaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked && !lowercaseAlpha && !numbers && !specialCharacters) {
      return;
    }
    setUppercaseAlpha(event.target.checked);
  };

  const handleLowercaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked && !uppercaseAlpha && !numbers && !specialCharacters) {
      return;
    }
    setLowercaseAlpha(event.target.checked);
  };

  const handleNumbersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked && !uppercaseAlpha && !lowercaseAlpha && !specialCharacters) {
      return;
    }
    setNumbers(event.target.checked);
  };

  const handleSpecialCharactersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked && !uppercaseAlpha && !lowercaseAlpha && !numbers) {
      return;
    }
    setSpecialCharacters(event.target.checked);
  };

  // Function for generating new random password
  const generatePassword = () => {
    const mixedList: (string | number)[] = [];

    if (uppercaseAlpha) {
      const uppercaseCharacters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
      mixedList.push(...uppercaseCharacters);
    }
    if (lowercaseAlpha) {
      const lowercaseCharacters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
      mixedList.push(...lowercaseCharacters);
    }
    if (numbers) {
      const numericCharacters: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      mixedList.push(...numericCharacters);
    }
    if (specialCharacters) {
      const specialCharacters: string[] = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",];
      mixedList.push(...specialCharacters);
    }

    // Generate a random password of the desired length
    let generatedPassword = "";
    for (let i = 0; i < sliderValue; i++) {
      const randomIndex = Math.floor(Math.random() * mixedList.length);
      generatedPassword += mixedList[randomIndex];
    }

    // Update the password state
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    const toastOptions: ToastOptions = {
      position: "bottom-right",
      autoClose: 2000, // Close after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-sm",
    };
    toast.success("Password copied to clipboard!", toastOptions);
  };

  return (
    <div className="flex justify-center h-screen px-4">
      <div className="max-w-xl w-full">
        {/* Logo */}
        <div className="flex justify-center items-center p-4">
          <img
            src="/password_logo.jpg"
            alt="Random Password Generator"
            className="max-w-[300px] w-full h-auto sm:max-w-[400px]"
          />
        </div>

        {/* Title */}
        <h1 className="md:text-3xl text-lg font-extrabold pb-2 text-center">
          Random Password Generator
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-700">
          Create strong and secure passwords to keep your account safe online.
        </p>

        {/* Password Configuration Form */}
        <form>
          {/* Password Input */}
          <div className="relative py-5">
            <input
              className="block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pr-16"
              name="generatedPassword"
              readOnly
              value={password}
            />
            {/* Refresh Icon */}
            <RefreshIcon
              onClick={generatePassword}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            />
            {/* Copy Icon */}
            <ContentCopyIcon
              onClick={copyToClipboard}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            />
          </div>

          {/* Slider for Password Length */}
          <div className="mb-4">
            <label
              htmlFor="lengthSlider"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password Length: {sliderValue}
            </label>
            <input
              id="lengthSlider"
              type="range"
              min="8"
              max="32"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full appearance-none h-3 bg-blue-500 rounded-full cursor-pointer"
            />
          </div>

          {/* Checkbox Options */}
          <div className="flex flex-col sm:flex-row">
            <div className="flex-none mb-2 sm:mb-0 sm:mr-5">
              <span className="block text-sm font-medium text-gray-700">
                Characters used:
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:grow">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="uppercaseAlpha"
                  checked={uppercaseAlpha}
                  onChange={handleUppercaseChange}
                  className="mr-2"
                />
                ABC
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lowercaseAlpha"
                  checked={lowercaseAlpha}
                  onChange={handleLowercaseChange}
                  className="mr-2"
                />
                abc
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="numbers"
                  checked={numbers}
                  onChange={handleNumbersChange}
                  className="mr-2"
                />
                123
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="specialCharacters"
                  checked={specialCharacters}
                  onChange={handleSpecialCharactersChange}
                  className="mr-2"
                />
                !@#
              </label>
            </div>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
}
