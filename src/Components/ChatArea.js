import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

function ChatArea(prop) {
  const [inputs, setInputs] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      ...messages,
      {
        content: "Welcome to the pregancy app!",
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  function handleUserInput(event) {
    event.preventDefault();
    setInputs(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputs.trim() !== "") {
      fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: inputs },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages([
            ...messages,
            {
              content: data.choices[0].message.content,
              timestamp: new Date().toISOString(),
              question: inputs,
            },
          ]);
          // setChatData([...chatData, data.choices[0].message.content ])
          console.log(messages); // read the server response
        });
      setInputs("");
    }
  }

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <>
      <div className="bg-[#F4F2F2] h-[760px] w-[1225px] mt-5">
        <div className="bg-[#E4E4E4] h-[65px] flex justify-between p-2">
          <div className="bg-[#F4F2F2] h-[35px] w-[250px] rounded-lg pb-2 pt-2 pl-2 text-xs text-red-900">
            {prop.topic}
          </div>
          <div className="flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA1P4WA3NSrAegwoKt3Nj9X9Glgb_dY5Kpg&usqp=CAU"
              alt="pregnant lady"
              className="rounded-full w-[50px] h-[50px]"
            />
            <Link to="/" className="ml-2 mr-8 mt-5 text-green-900 text-sm">
              Log out
            </Link>
          </div>
        </div>

        <div className="bg-[#E4E4E4] flex h-[60px] w-[1225px] absolute bottom-[20px] justify-center">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleUserInput}
              id="messagebox"
              placeholder="Type message here"
              value={inputs}
              className="bg-[#F4F2F2] text-xs pl-2 h-[35px] w-[500px] rounded-lg mt-3 mr-2 shadow-lg focus:outline-none"
            />
            <input
              type="submit"
              defaultValue="Send"
              className="bg-[#1C754E] mt-3 p-2 text-center shadow-lg rounded-lg w-[100px] text-white text-[14px] h-[35px] cursor-pointer "
            />
          </form>
        </div>

        <div className="flex-col ml-[350px] mt-5">
          {sortedMessages.map((message, index) => (
            <div key={index}>
                {message.question ? <div

                    className="bg-[#ffffff] w-[500px] mb-5 text-gray-900 text-sm p-3"
                >
                    {message.question}
                </div> : null}
                <div
                    className="bg-[#E4E4E4] w-[500px] mb-5 text-green-900 text-sm p-3"
                >
                    {message.content}
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatArea;
