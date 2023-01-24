import Link from 'next/link';
import { SocialMediaRow, SubscribeForm } from 'shared/components';
import { useSiteMetadata } from 'shared/hooks';
import handler from 'api/gqlClient'

// BL JUST USE THIS PAGE TO DISPLAY DJANGO GRAPHQL

const IndexPage = async () => {
  const { promptcompletions } = await handler()
  console.log("#promptcompletions", promptcompletions)
  return (
    <div className="grid place-items-center min-h-[calc(100vh-245px)]">
      <div>
        {promptcompletions && promptcompletions.map((promptcompletion) => {
            console.log("#promptcompletion", promptcompletion)
            return (<div>
              <pre>{promptcompletion.inputContentSourceChunked.contentChunkedTitle} {promptcompletion.inputContentSourceChunked.transcriptStartTime}</pre>
              <pre>{promptcompletion.outputCompletion} </pre>
            </div>)
          })}


        {/* <SubscribeForm /> */}
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const data = await handler()
//   console.log(data)
//   return {
//     props: {
//       data
//     }, // will be passed to the page component as props
//   }
// }

export default IndexPage;
