import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
const tableHeadRows = ['Track', 'Spins', 'Trend', 'Positive', 'Added']
const statuses = {
  Completed: 'text-green-400 bg-green-400/10',
  Error: 'text-rose-400 bg-rose-400/10',
}

const activityItems = [
  {
    user: {
      name: 'DOJA CAT - Agora Hills',
      imageUrl:
        'https://i.discogs.com/QcYIKEGN6NvO5mcW09lzoaK-6f14uqjaqB9tNfY5qmg/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM5NzA3/MTktMTY4Mzc3MjQ3/Ny01NjM2LmpwZWc.jpeg',
    },
    commit: '353',
    branch: 'main',
    status: '1.902',
    duration: '86',
    date: '10/05/23',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'TAYLOR SWIFT - Is It Over Now?',
      imageUrl:
        'https://i.discogs.com/zQyte8JpdfqpxRpYHgnsgJD-dpyn941eftjyZSmP4B4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTExMjQ2/NDUtMTY5ODQyMjQ4/Ni02ODQ4LmpwZWc.jpeg',
    },
    commit: '174',
    branch: 'main',
    status: '1.862',
    duration: '77',
    date: '10/26/23',
    dateTime: '2023-01-23T09:00',
  },
  {
    user: {
      name: 'SABRINA CARPENTER - Feather',
      imageUrl:
        'https://i.discogs.com/VLUb_xR3E4Z-W-UoYwmmWEh9l-MYVqsUSXOcY0Oxu48/rs:fit/g:sm/q:90/h:533/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQzNzgy/ODQtMTY4MzgxMDg3/Mi00NTkwLmpwZWc.jpeg',
    },
    commit: '109',
    branch: 'main',
    status: '1.91',
    duration: '55',
    date: '09/30/23',
    dateTime: '2023-01-23T00:00',
  },
  {
    user: {
      name: 'JACK HARLOW - Lovin On Me',
      imageUrl:
        'https://i.discogs.com/uSUYp_5WsL8mdRGyze2gVHy_WcDXqc6GcvWufn2TLvs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4ODU2/MTcwLTE2OTk2MTg3/NDQtNTM4NC5qcGVn.jpeg',
    },
    commit: '215',
    branch: 'main',
    status: '1.337',
    duration: '94',
    date: '11/09/23',
    dateTime: '2023-01-21T13:00',
  },
  {
    user: {
      name: 'TYLA - Water',
      imageUrl:
        'https://i.discogs.com/pLk5JHs_PIK1UFZSVmiiHlbysUGM4DGLA7vV9IW5mAk/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MjE4/OTAzLTE3MDI3NDA3/NzgtNTk0MC5wbmc.jpeg',
    },
    commit: '109',
    branch: 'main',
    status: '0.796',
    duration: '57',
    date: '10/07/23',
    dateTime: '2023-01-18T12:34',
  },
  {
    user: {
      name: 'ARIANA GRANDE - yes, and?',
      imageUrl:
        'https://i.discogs.com/F6cNWcVLwBWkL3Xb4svBanfaAb22zhrO08Z-W88qK8o/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NTE0/Nzg0LTE3MDU0OTkx/MjQtOTEzNi5qcGVn.jpeg',
    },
    commit: '173',
    branch: 'main',
    status: '0.999',
    duration: '49',
    date: '01/11/24',
    dateTime: '2023-01-16T15:54',
  },
  {
    user: {
      name: 'OLIVIA RODRIGO	- get him back!',
      imageUrl:
        'https://i.discogs.com/dL8ZENtEl5VD_kV8I-iBTci80VThEu2NGjT9THcuulg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTc1OTI2/ODktMTY4ODE4NDU4/My0yNDE4LmpwZWc.jpeg',
    },
    commit: '87',
    branch: 'main',
    status: '1.274',
    duration: '57',
    date: '09/08/23',
    dateTime: '2023-01-16T11:31',
  },
  {
    user: {
      name: 'DUA LIPA - Training Season',
      imageUrl:
        'https://i.discogs.com/llDrJIc80BrlyF7qrd09CCiprguIgC3-VZPzkjIDtfM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5ODA3/ODA5LTE3MDgwMzg2/OTAtNzUyMi5qcGVn.jpeg',
    },
    commit: '19',
    branch: 'main',
    status: '0.095',
    duration: '42',
    date: '02/16/24',
    dateTime: '2023-01-09T08:45',
  },
]

const tCellClass = `border border-gray-700 px-4 py-2 text-sm text-white md:text-xs lg:text-[15px] xl:text-lg`

const TracksTable = () => {
  return (
    <div className={`px-5`}>
      <Table className={`border border-gray-700`}>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeadRows.map((head) => (
              <TableHead
                className={`border-l border-r border-gray-700 text-center !font-bold !uppercase !text-white first:text-left`}
                key={head}
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {activityItems.map((item) => (
            <TableRow className={`text-center`} key={item.user.name}>
              <TableCell className={`border border-gray-700 py-2 text-white`}>
                <div className={`flex flex-col gap-2.5 text-left lg:flex-row lg:items-center`}>
                  <Image
                    className={`rounded-full bg-gray-800`}
                    src={item.user.imageUrl}
                    alt={item.user.name}
                    width={64}
                    height={64}
                  />
                  <div className="text-sm md:text-xs lg:text-[15px] xl:text-lg">{item.user.name}</div>
                </div>
              </TableCell>
              <TableCell className={tCellClass} key={item.commit}>
                {item.commit}
              </TableCell>
              <TableCell className={tCellClass}>
                <div className={`flex items-center justify-center gap-x-2 ${statuses[item.status]}`}>
                  <div className="w-2 h-2 bg-current border rounded-full" />
                  <div className="text-sm font-medium leading-6 md:text-xs lg:text-[15px] xl:text-lg">
                    {item.status}
                  </div>
                </div>
              </TableCell>
              <TableCell className={tCellClass}>{item.duration}</TableCell>
              <TableCell className={tCellClass}>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TracksTable

/*

{activityItems.map((item) => (
            <TableRow className={`text-center`} key={item.user.name}>
              <TableCell className={`border border-gray-700 py-2 text-white`}>
                <div className={`gap-x-2 md:flex`}>
                  <Image
                    className={`rounded-full bg-gray-800`}
                    src={item.user.imageUrl}
                    alt={item.user.name}
                    width={50}
                    height={50}
                    style={{
                      width: '4rem',
                      height: '4rem',
                      marginRight: '1rem',
                      marginLeft: '1rem',
                    }}
                  />
                  <div className="text-sm md:text-xs lg:text-[15px] xl:text-lg">{item.user.name}</div>
                </div>
              </TableCell>
              <TableCell className={tCellClass} key={item.commit}>
                {item.commit}
              </TableCell>
              <TableCell className={tCellClass}>
                <div className={`flex items-center justify-center gap-x-2 ${statuses[item.status]}`}>
                  <div className="w-2 h-2 bg-current border rounded-full" />
                  <div className="text-sm font-medium leading-6 md:text-xs lg:text-[15px] xl:text-lg">
                    {item.status}
                  </div>
                </div>
              </TableCell>
              <TableCell className={tCellClass}>{item.duration}</TableCell>
              <TableCell className={tCellClass}>{item.date}</TableCell>
            </TableRow>
          ))}

*/
