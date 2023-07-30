import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

const pcBuilderPage = () => {
  const router = useRouter();
  const { monitor, ram, motherBoard, processor, powerSupply, storageDevice } =
    useSelector((state) => state.pcBuilder.pcBuild);
  const { buildPc } = useSelector((state) => state.pcBuilder);
  function showAlert() {
    alert("You build Successfully");
  }
  return (
    <div className='overflow-x-auto h-[70vh]'>
      <h1 className='text-center text-3xl'>Build Your Dream Pc</h1>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Component</th>
            <th>Specification</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* MONITOR */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {monitor?.image ? (
                      <Image
                        src={monitor.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {monitor?.productName ? (
                    <div className='font-bold'>{monitor?.productName}</div>
                  ) : (
                    <div className='font-bold'>Add Monitor</div>
                  )}
                  {monitor?.category ? (
                    <div className='text-sm opacity-50'>
                      {monitor?.category}
                    </div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Monitor</div>
                  )}
                </div>
              </div>
            </td>
            {monitor?.keyFeatures?.brand && monitor?.averageRating ? (
              <td>
                {monitor?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {monitor?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Monitor
                <br />
                <span className='badge badge-ghost badge-sm'>Add Monitor</span>
              </td>
            )}
            {monitor?.price ? <td>{monitor?.price}</td> : <td>Add monitor</td>}
            <th>
              <Link
                href={`/addproduct/${"Monitor"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
          {/* RAM */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {ram?.image ? (
                      <Image
                        src={ram.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {ram?.productName ? (
                    <div className='font-bold'>{ram?.productName}</div>
                  ) : (
                    <div className='font-bold'>Add Ram</div>
                  )}
                  {ram?.category ? (
                    <div className='text-sm opacity-50'>{ram?.category}</div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Ram</div>
                  )}
                </div>
              </div>
            </td>
            {ram?.keyFeatures?.brand && ram?.averageRating ? (
              <td>
                {ram?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {ram?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Ram
                <br />
                <span className='badge badge-ghost badge-sm'>Add Ram</span>
              </td>
            )}
            {ram?.price ? <td>{ram?.price}</td> : <td>Add Ram</td>}
            <th>
              <Link
                href={`/addproduct/${"RAM"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
          {/* MOTHER BOARD */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {motherBoard?.image ? (
                      <Image
                        src={motherBoard?.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {motherBoard?.productName ? (
                    <div className='font-bold'>{motherBoard?.productName}</div>
                  ) : (
                    <div className='font-bold'>Add Motherboard</div>
                  )}
                  {motherBoard?.category ? (
                    <div className='text-sm opacity-50'>
                      {motherBoard?.category}
                    </div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Motherboard</div>
                  )}
                </div>
              </div>
            </td>
            {motherBoard?.keyFeatures?.brand && motherBoard?.averageRating ? (
              <td>
                {motherBoard?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {motherBoard?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Motherboard
                <br />
                <span className='badge badge-ghost badge-sm'>
                  Add Motherboard
                </span>
              </td>
            )}
            {motherBoard?.price ? (
              <td>{motherBoard?.price}</td>
            ) : (
              <td>Add Motherboard</td>
            )}
            <th>
              <Link
                href={`/addproduct/${"Motherboard"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
          {/* PROCESSOR */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {processor?.image ? (
                      <Image
                        src={processor.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {processor?.productName ? (
                    <div className='font-bold'>{processor?.productName}</div>
                  ) : (
                    <div className='font-bold'>Add Processor</div>
                  )}
                  {processor?.category ? (
                    <div className='text-sm opacity-50'>
                      {processor?.category}
                    </div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Processor</div>
                  )}
                </div>
              </div>
            </td>
            {processor?.keyFeatures?.brand && processor?.averageRating ? (
              <td>
                {processor?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {processor?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Processor
                <br />
                <span className='badge badge-ghost badge-sm'>
                  Add Processor
                </span>
              </td>
            )}
            {processor?.price ? (
              <td>{processor?.price}</td>
            ) : (
              <td>Add Processor</td>
            )}
            <th>
              <Link
                href={`/addproduct/${"Processor"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
          {/* STORAGE */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {storageDevice?.image ? (
                      <Image
                        src={storageDevice?.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {storageDevice?.productName ? (
                    <div className='font-bold'>
                      {storageDevice?.productName}
                    </div>
                  ) : (
                    <div className='font-bold'>Add Storage</div>
                  )}
                  {storageDevice?.category ? (
                    <div className='text-sm opacity-50'>
                      {storageDevice?.category}
                    </div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Storage</div>
                  )}
                </div>
              </div>
            </td>
            {storageDevice?.keyFeatures?.brand &&
            storageDevice?.averageRating ? (
              <td>
                {storageDevice?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {storageDevice?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Storage
                <br />
                <span className='badge badge-ghost badge-sm'>Add Storage</span>
              </td>
            )}
            {storageDevice?.price ? (
              <td>{storageDevice?.price}</td>
            ) : (
              <td>Add Storage</td>
            )}
            <th>
              <Link
                href={`/addproduct/${"StorageDevice"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
          {/* POWER SUPPLY */}
          <tr>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    {powerSupply?.image ? (
                      <Image
                        src={powerSupply.image}
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Image
                        src='https://icons.iconarchive.com/icons/cornmanthe3rd/metronome/512/System-computer-icon.png'
                        alt='Avatar Tailwind CSS Component'
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
                <div>
                  {powerSupply?.productName ? (
                    <div className='font-bold'>{powerSupply?.productName}</div>
                  ) : (
                    <div className='font-bold'>Add Power Supply</div>
                  )}
                  {powerSupply?.category ? (
                    <div className='text-sm opacity-50'>
                      {powerSupply?.category}
                    </div>
                  ) : (
                    <div className='text-sm opacity-50'>Add Power Supply</div>
                  )}
                </div>
              </div>
            </td>
            {powerSupply?.keyFeatures?.brand && powerSupply?.averageRating ? (
              <td>
                {powerSupply?.keyFeatures?.brand}
                <br />
                <span className='badge badge-ghost badge-sm'>
                  {powerSupply?.averageRating}
                </span>
              </td>
            ) : (
              <td>
                Add Power Supply
                <br />
                <span className='badge badge-ghost badge-sm'>
                  Add Power Supply
                </span>
              </td>
            )}
            {powerSupply?.price ? (
              <td>{powerSupply?.price}</td>
            ) : (
              <td>Add Power Supply</td>
            )}
            <th>
              <Link
                href={`/addproduct/${"PowerSupply"}`}
                className='btn btn-primary btn-xs'>
                add
              </Link>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
      </table>
      <div className='flex justify-center mt-7'>
        {buildPc ? (
          <button onClick={() => showAlert()} className='btn btn-primary'>
            Build
          </button>
        ) : (
          <button className='btn btn-primary ' disabled='disabled'>
            Build
          </button>
        )}
      </div>
    </div>
  );
};

export default pcBuilderPage;

pcBuilderPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
