import React, { useState, useEffect } from "react";
const arr = [
  {
    name: "Civil 1",
    activites: {
      activity1: [
        { taskName: 'Civil 1 Activity 1 Task 1', rate: 45, cost: 50, status: 'pending' },
        { taskName: 'Civil 1 Activity 1 Task 2', rate: 45, cost: 50, status: 'in-progress' },
        { taskName: 'Civil 1 Activity 1 Task 3', status: 'completed' }
      ],
      activity2: [
        { taskName: 'Civil 1 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 1 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },
  {
    name: "Civil 2",
    activites: {
      activity1: [
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
      ],
      activity2: [
        { taskName: 'Civil 2 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 2 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },
  {
    name: "Civil 3",
    activites: {
      activity1: [
        { taskName: 'Civil 1 Activity 1 Task 1', rate: 45, cost: 50, status: 'pending' },
        { taskName: 'Civil 1 Activity 1 Task 2', rate: 45, cost: 50, status: 'in-progress' },
        { taskName: 'Civil 1 Activity 1 Task 3', status: 'completed' }
      ],
      activity2: [
        { taskName: 'Civil 1 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 1 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },
  {
    name: "Civil 4",
    activites: {
      activity1: [
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
      ],
      activity2: [
        { taskName: 'Civil 2 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 2 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },
  {
    name: "Civil 5",
    activites: {
      activity1: [
        { taskName: 'Civil 1 Activity 1 Task 1', rate: 45, cost: 50, status: 'pending' },
        { taskName: 'Civil 1 Activity 1 Task 2', rate: 45, cost: 50, status: 'in-progress' },
        { taskName: 'Civil 1 Activity 1 Task 3', status: 'completed' }
      ],
      activity2: [
        { taskName: 'Civil 1 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 1 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 1 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },
  {
    name: "Civil 6",
    activites: {
      activity1: [
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
        { taskName: 'Civil 2 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 1 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 1 Task 3', status: 'completed' },
      ],
      activity2: [
        { taskName: 'Civil 2 Activity 2 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 2 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 2 Task 3', status: 'completed' }
      ],
      activity3: [
        { taskName: 'Civil 2 Activity 3 Task 1', status: 'pending' },
        { taskName: 'Civil 2 Activity 3 Task 2', status: 'in-progress' },
        { taskName: 'Civil 2 Activity 3 Task 3', status: 'completed' }
      ]
    }
  },

]
const UpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
  </svg>

);

const WorkOrder = () => {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState([])
  const [expand, setexpand] = useState(NaN)
  const [expArray, setExpArray] = useState([])
  const [collapse, setcollapse] = useState([])

  useEffect(() => {
    const data = arr.map((item, index) => { return false })
    setSelected(data)


  }, [])


  useEffect(() => {
    console.log(expand)
    if (!isNaN(expand)) {
      const Obj = arr[expand]
      // go to depth of object and make true false with proper keys
      console.log(Obj, arr, expand)
      const emptyData = {}
      for (const key in Obj.activites) {
        const data = Obj.activites[key].map((item, index) => { return false })
        emptyData[key] = data
      }
      setcollapse(emptyData)
      setExpArray(
        Object.keys(emptyData).map((item, index) => { return false })
      )
      console.log(emptyData)
      // setSelected(data)
    }


  }, [expand])

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="flex items-center">
          <button className="mr-4 text-xl">&larr;</button>
          <h1 className="text-xl font-semibold">Create Workorder</h1>
        </div>
        <button className="bg-teal-400 text-white w-32 py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">Save</button>
      </div>

      {/* Navigation */}
      <div className="flex mb-4">
        <button onClick={() => setStep(0)} className={`w-64 ${step === 0 ? "border-b-2 border-black p-2 font-semibold" : "border-b p-2 text-gray-400"}`}>Overview</button>
        <button onClick={() => setStep(1)} className={`w-64 ${step === 1 ? "border-b-2 border-black p-2 font-semibold" : "border-b p-2 text-gray-400"}`}>Other</button>
      </div>

      {/* Overview Table */}
      {step === 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full font-medium bg-[#deeafa] text-left">
                <th className="py-2 px-6">
                  <input
                    type="checkbox"
                    onClick={() => {
                      const state = selected.reduce((acc, cur) => acc && cur, true);
                      setSelected(selected.map(() => !state));
                    }}
                    checked={selected.reduce((acc, cur) => acc && cur, true)}
                  />
                </th>
                <th className="py-2 px-6 font-medium">Packages</th>
                <th className="py-2 px-6 font-medium flex gap-1">Rate <p className="font-normal">(in sqft)</p></th>
                <th className="py-2 px-6 font-medium">Total</th>
                <th className="py-2 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b">
                    <td className="py-2 px-6">
                      <input
                        type="checkbox"
                        onClick={() => {
                          const data = selected.map((val, i) => (i === index ? !val : val));
                          setSelected(data);
                        }}
                        checked={selected[index]}
                      />
                    </td>
                    <td className="py-2 px-6">{item.name}</td>
                    <td className="py-2 px-6">567.80</td>
                    <td className="py-2 px-6">&#8377; 2,98,6792</td>
                    <td
                      onClick={() => setexpand(expand === index ? NaN : index)}
                      className="py-2 px-6 cursor-pointer text-teal-400 text-2xl"
                    >
                      {expand === index ? '-' : '+'}
                    </td>
                  </tr>
                  {expand === index && (
                    <>

                      {Object.keys(item.activites).map((activity, ind) => (
                        <tr>

                          <td colSpan="1">
                            <ul className="flex flex-col px-12">

                              <li key={ind} className="flex justify-start items-start gap-12">
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    onClick={() => {
                                      const state = collapse[activity]?.reduce((acc, cur) => acc && cur, true) || false;
                                      const data = collapse[activity]?.map(() => !state) || [];
                                      setcollapse({ ...collapse, [activity]: data });
                                    }}
                                    checked={collapse[activity]?.reduce((acc, cur) => acc && cur, true) || false}
                                  />
                                  <span className="ml-2">{activity}</span>
                                </div>
                                <div className=" ">
                                  {expArray[ind] && (
                                    <div className="mt-4 flex flex-col gap-5" >
                                      {item.activites[activity].map((task, i) => (
                                        <div key={i} className="flex justify-between">
                                          <div className="flex items-center">
                                            <input
                                              type="checkbox"
                                              onClick={() => {
                                                const data = collapse[activity]?.map((val, j) => (j === i ? !val : val)) || [];
                                                setcollapse({ ...collapse, [activity]: data });
                                              }}
                                              checked={collapse[activity]?.[i] || false}
                                            />
                                            <span className="ml-2">{task.taskName}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                {/* <div> 500.64 </div>
                              <div> ₹ 2,98,6792 </div> */}

                              </li>
                            </ul>
                          </td>
                          <td></td>
                          <td className="py-2 px-6">567.80</td>
                          <td className="py-2 px-6">&#8377; 2,98,6792</td>
                          <td className="py-2 px-6">
                            <span
                              className=" text-teal-400 text-2xl cursor-pointer pt-4"
                              onClick={() => setExpArray(expArray.map((val, i) => (i === ind ? !val : val)))}
                            >
                              {expArray[ind] ? <><UpIcon /></> : '+'}
                            </span>
                          </td>

                        </tr>
                      ))}

                    </>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {step === 1 && <div>Hello World!</div>}
    </div>
  );
};

export default WorkOrder;