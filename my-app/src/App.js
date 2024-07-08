import React, { useState, useEffect } from "react";
const arr = [
  {
    name: "Civil 1",
    activites: {
      activity1: [
        { taskName: 'Civil 1 Activity 1 Task 1', status: 'pending' },
        { taskName: 'Civil 1 Activity 1 Task 2', status: 'in-progress' },
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

]
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
        <button className="bg-teal-400 text-white py-2 px-4 rounded">Save</button>
      </div>

      {/* Tab Navigation */}
      <div className="flex mb-4">
        <button onClick={() => { setStep(0) }} className={step == 0 ? `border-b-2 border-black p-2 font-semibold` : "p-2 text-gray-400 ml-4"}>Overview</button>
        <button onClick={() => { setStep(1) }} className={step == 1 ? `border-b-2 border-black p-2 font-semibold` : "p-2 text-gray-400 ml-4"}>Other</button>
      </div>


      {step == 0 && <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-2 px-6">
                <input onClick={() => {
                  const data = selected.map((item) => {
                    const State = selected.reduce((accumulator, currentValue) => accumulator & currentValue, true)
                    return !State
                  })
                  setSelected(data)
                }} checked={selected.reduce((accumulator, currentValue) => accumulator & currentValue, true)} type="checkbox" />
              </th>
              <th className="py-2 px-6">Packages</th>
              <th className="py-2 px-6">Rate (in sqft)</th>
              <th className="py-2 px-6">Total</th>
              <th className="py-2 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {arr.map(
              (item, index) => (<>
                <tr key={index} className="border-b">
                  <td className="py-2 px-6">
                    <input onClick={() => {
                      const data = selected.map((item, i) => {
                        if (i === index) {
                          return !item
                        }
                        return item
                      })
                      setSelected(data)
                    }} checked={selected[index]} type="checkbox" />

                  </td>
                  <td className="py-2 px-6">{item.name}</td>
                  <td className="py-2 px-6">567.80</td>
                  <td className="py-2 px-6">&#8377; 2,98,6792</td>
                  <td onClick={() => {
                    setexpand(index == expand ? NaN : index)
                  }} className="py-2 px-6 text-teal-400 text-2xl">{expand == index ? "-" : "+"}</td>
                </tr>
                <div>
                  {expand === index && (
                    <>
                      <div className="flex flex-col px-36">
                        {Object.keys(item.activites).map((activity, ind) => (
                          <div key={ind} className="flex justify-between">
                            <div className="flex items-center">
                              <input onClick={() => {
                                console.log(ind, collapse[activity])
                                const tempData = collapse[activity].reduce((accumulator, currentValue) => accumulator & currentValue, true)
                                const data = collapse[activity].map((item, i) => {
                                  return !tempData
                                })
                                setcollapse({ ...collapse, [activity]: data })
                              }} checked={
                                collapse[activity]?.reduce((accumulator, currentValue) => accumulator & currentValue, true)
                              } type="checkbox" />
                              <span className="ml-2">{activity}</span>
                            </div>
                            <div className="pt-16 " >
                              {expArray[ind] && <div className="">
                                {
                                  item.activites[activity].map((task, i) => (
                                    <div key={i} className="flex justify-between">
                                      <div className="flex items-center">
                                        <input
                                          onClick={() => {
                                            const data = collapse[activity].map((item, j) => {
                                              if (j === i) {
                                                return !item
                                              }
                                              return item
                                            })
                                            setcollapse({ ...collapse, [activity]: data })
                                          }
                                          }
                                          checked={collapse[activity][i]}
                                          type="checkbox" />
                                        <span className="ml-2">{task.taskName}</span>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>}
                            </div>
                            <span className="text-teal-400 text-2xl" onClick={() => {
                              // setcollapse({ ...collapse, [activity]: collapse[activity].map((item, i) => { return !item }) })
                              setExpArray(expArray.map((item, i) => {
                                if (i === ind) {
                                  return !item
                                }
                                return item
                              }))
                            }}>

                              {
                                expArray[ind] ? "-" : "+"
                              }
                            </span>
                          </div>
                        ))}
                      </div>

                    </>
                  )}
                </div>
              </>
              )
            )}
          </tbody>
        </table>
      </div>}
      {step == 1 && <div>Hello World!</div>}
    </div>
  );
};

export default WorkOrder;