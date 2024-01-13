import Link from 'next/link'
import React from 'react'

function JoinOurTeam({contact}) {
  return (
    <div className=" py-8" style={{ background: "#E6E6E6" }}>
    <div className=" xxl:w-[1104px]">
      <h1 className="text-xl px-10 md:px-32 xxl:text-[32px] font-semibold text-start mb-4 font-gothamBold">
      We are always on the lookout for new talent!
      </h1>
      <div className="flex px-10 md:px-32 justify-start">
        <button className="text-gray-900 text-lg py-2 font-gothamBook  rounded hover:text-gray-600">
          <Link className=" underline" href="/joinOurTeam">
            Join our team
          </Link>
        </button>
      </div>
    </div>
  </div>
  )
}

export default JoinOurTeam