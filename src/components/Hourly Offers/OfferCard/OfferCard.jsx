import React from 'react';
import StepsToRedeem from '../StepsToRedeem/StepsToRedeem';
import MoreOffers from '../MoreOffers/MoreOffers';

const OfferCard = () => {
  return (
    <div className="bg-white rounded-t-3xl shadow-lg -mt-16 p-6 relative">
          {/* Logo */}
          <div className="flex justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEXlGTf////mKUPkACbkACvkACTkACnlFjXjABvkACHkACjlEjPjAB/kAC3jABrlEDL++fr86eviAAD+9PX74eT2wcbyo6v62dz75Ob1trz+9fbjABXpU2Tsb3z4ztLwk5zrZnTxmqL2wMXoPVLzq7LteYXsanjoRVnqV2f1t73ugo33ys7wjZfuf4rnOU/qXm3mJUAaf/RLAAAO5klEQVR4nO2c53bqvBKGEe640mzAYKpDaCH3f3VHmpGNISRGYM7a+pbeP3uHYvxIo2kStNqt/7oUofxShPJLEcovRSi/FKH8UoTySxHKL0UovxSh/FKE8ksRyi9FKL8UofxShPJLEcovRSi/FKH8UoTySxHKL0UovxSh/FKE8ksRyi9FKL8UofxShPJLEcovRSi/FKH8UoTySxHKL0UovxSh/FKE4vL1xi/5khonNGbxv4XYNKGRk6XZ8DVfU8OE2geJvGYv+aqaJfSnhGy0Ri/5sholdL8JIduwyUu+rkYJ0wEhkd3kFRtQk4ROTP49I22SMNxSQBJazV2xETVIGHQp4LzT3AWbUXOEBrPRbtDY9ZpSY4TuF7PR6T/mSFsNEqYJBTzUOtL//yptitD/YFPYdmteZrXvIvr++8ibIgxGFHBYm7B5Scf6OQqd2d59m3k3RIhTuK67TXNGet/TW0R/Rt/7VTf9z6ohwoBmMySrWYWuvR7d80bGkD6avCsXaoYQg/3i7yl0vzP2qo8fxZXNuIn1pqUoTujbP0GMVX0stFrZKKJ5aw/+ql7DiRjh55tWojChn0fn2yLe0tktHmtqe8voDUhC9j79f3iuPO6SByzgaQkTetFPr6Dv2S2adWbmtsmw12ZNDjokl/wVTfyfIQwXd+zRZtF+6NS9V5+P0pbLZtrZkUvsB1f671hpZ8Pu5nx1N3Rufjx2K/ZkZ8UnLlzTGsTzHHyHuQTC9ZvChSihk/1ccvqcPtT/09uH5yV9C6Y8odajF1llgy7GDWMHhIbgnTwqUUK7z+4GvEUpL7lUvpbr+6ap+zdlYjDapAY8FgbbHVyDrjz98nYSvasqESS0rJ9ewfL5MrJ8zTbXs/1yOc/PrcqytJwpSeJkRt+lrRPC9cG7ASkEi6R2GT8pQcLw8+ea8XM2Bbbv+LPdiJTKSrPTrXhCHxjTrFVfls8feRKLA0R27+p+CBLqR7idK4uCcL/q5bBCSf+wzKdtKnCWzA47EEtIAm+abj+WXZxCbul80Oqi6dMSJNTAlXavvErAJihBUzu2U8P0/dC1IAnTqH8JPw/Dblk7uq7fmwDSkM8xH7R3BQtRQnSlh+qacdeF3W3agc7M190eNTBjP+/2HDc0ekPS7RbFIxj1J3W/fJhw0MjbKkRBQhssLK62m2w0QrI0EatlpYfN5yf9v94bRZuEFks2rY3T/RLtkKUH045mZdwh46B1hUuL0HQ8R6sPooKEAcCcLsEitOc4f2aHT4Jv0UmJqNe19ywq7Dssadn6tI6Hp1l6sDWZf13jGwKIHSvBcOjb0/gwSMZfft0rxQi5RZYVnmV/ots49AojC8/s7y01OvCrWUpd0SG/TLoZky1OJr6Dx5+5mKOxF4XXrt1EECPkKaRbTJez458zLn299aVRM4xNa71dM+9jWC33VJkguz+9ggmn14P2iCx7VQadYd3kixGaYJITvma886T4nPmlrHU1kmtLn8a5LUlahyM1o4oludtrQF6XEE3A0VjG4BJ2azMFMUJMIROI1WGwuXxOfoHw9xvbYn+acV8Pna+bW79tOaErHYg4mgDSohEmR7X7JGKEmEKCVzDbuAJ3uxsjC3NuN86gHdY3SNGVjgUyGpMF0GjWQ/OubWCKEaLfY9vYQY6TF/dGt5/DYa32Z62fa91P5e8rNDW4tMOCS6i3nE1Esm2zvhS7FdQkXXuMgCc7vRevQ83zQusR58Gz0geKQ2273DFT8enCjXz6H9dJU6f+M4QIebDYai3uq8/UU7J/o6vlrqfn8WCweGQGixZGWvtC8EgHA3uPcc/x0vbn1DDqHZQQIQ8WGubKJFqbPG+uZiS+d8T676EjGZDDcd/1U6GmFQsUGnLMA3hso3l4QHc6rN+uFCLEJLl/QsAuiwIIfblDK8h5fftYAxRbGL+UTmz4NnhpTCRYXmAcSEWj2o0EIUKtEh9IAjkhQmeFlfpuWeAeH5pDvOQvpRP4Wcx28HWsAOEpQqFmcxpov3MNU5ginIMisTDLT8+2N0sk9O86E5yRX7pY3qhcATYkF5AX6NtDvz9YzRc5ur0mCb1ygkjMfYMGTpWHM/OMT/aX3zTt/64YkB9s9+17GB6sp+/LaFi6pulW9Um21HC58i5maNi2Z+jm1x+D8yQh1k5M+8K1QIFPNpBZc79I5rbpBnRuE5xZyzTSWQIclu541wYJ4bByjEprHXe7oxne4KfwyYdqDmrBhh6pTRVECN1exAHP5Uc5YGVwlM3SwMcMvjVaGiWlBVnteIXvyw3jmHT3V+sTwumgJAzA6MkEM4iS0MQ+QPXEnJVCMhTXnowQICy9CIsShdBwwVMY4AyGgUuHF185Y4R+Xky8kQPpVZ5lVJdxKyhqBtxrw4v7ltvCRystvtCA5x4onB8ndD75DHartQIO857tRXyDh6EOiBb5+EpISrEjzmaAP0odYlgWmHDvMR+xzrxc51s2DJizOi2cLlLZCTDWYC/9VnM1fhjE/LOjtHpVXJqs6AevGpkUMOAulxcM+sdhw8ahMPEv3zt/8FnDExy8Z4C4G1hzECPQd6cOBy/a6pbu4c10H9kbf5DQ+Co7oaMrw8DEmS04mM3YaPlgP2yrsCga/aBsVlFNeutuOW1IyPtsEPP6qcPcM+QAUKx1ezyF4lE3pKt5wv9+ZKvjIUI/jS93mF3loNBKBMKAzdE8DabAzBLqYhPOsvuXt5MxeFx+wA8J+cqE5nfcAecFS7PDPjb6KN7JvIobLMbcGOLgoaq5ntDtXBIxQm4zLCwtmAuAJlW0xCUz/WQQ/A5SbrUrAwYB/8A4hoRospiYTUM4PQaFrV6uyyUfR/ersPXB9sFtgBpC307XcckH7iu+8vZ2SehVOvofAXPv35jGGOjqySxtX15BxoAFfagJBnITDMUMAXp/5YbHAE9totgVGHwEjzZ2/ib0825U3lPShiHdX4VsoyTkvWv4U8NtRrBTHzO56MvslM5qUkZ5j/CVbWEC1w8w6HyzbleRQiQ99snMsPGR1TR4qDR7gNAKyyymu0jhbF6533BL2LILF9rWC/uihbHbgjHq03rY442rLM2L94CVs8rECh3oFoxS6C4mNhws8uD1Iw9cDvSc/NbpMzBEGnM1VmoZYKP93YKOGs7Bdd+vQtiyT4NocpjRkM+DIC0vLAOMt0sjIK8uSRa4ISl2xVm0YZsEHklyNpoRJgsLPxgsdQyII9N1yh1KLV7uxb4LUOdprI7Xars2jBqa3nXrp0pIi1/Pc3CK/e1uyIIeVj191rzx0AnR6cH/QpOcMTC/ybe6uVa2PmPJrruOyM5wsT/Eoqa/z1fxWmiL44FoYRWlLNYR7tX1kfBOCRNqBnsQMwJsusFL+6wCYr0WDJdsBCAyGNtLl3ecWloEWahr27QKw2YOLOr9aRPfNihfJiyFhNc28ishFxBOwTFi6xdqKMtkBgmsp6KpG2LQXQ3jNc3TDtW6CP0L1GtGHO/FNgCECa+bTpzw92YgS55nEEHR+cxwgCCqj21csDxLwtgQOKZrMdjJpaSCZ3inRDcfd6MgYcLJdTaP3u73DVy6vmYY0OH44pDvHmMrgrXjWL7DWRy4lO1r0KusTBW4OJGmcVXChDf1CuY0f3zVSXeLO7UjEhVbcC2P+f/IwBKau2cDVsFxAbv+q8pOOsz4I03jexImvE68eRf8r82Dytmn7qVthDUyLSBZDOEDZIWX9GJc7aDCYn72RJEIIRjL4Lp9hycnH9vf9L1KKLXSZQRVoBeVp8jCL54TdBfVcQS/9PSJIhFCyMtuCLEMz545DGPisS+2Y1dkEWFnniVZ/HmdlEF6/lvTuFYihOHHT0LsRA1e+UYeTebKbJ61qhzzJimDZOhZRyNECH2KGxjMRcTPGVREo93fe9zwGacnHY1gN7H/AwaPsL9ESNOfv2M4NDOePuku3PO+iYeW9rKV1oq50ue/9Ce298Ryi5v14Awf9qXPynvWl4HEdkjZhN3sW0OddH97JPR1UwN12HnMZ80M8p/nvz4teFJh/HOjIPw+re94Ad+xp/k83oyZ4uUxP6+N1DM6tydP6wV7o89/ZUzwxFD7zmhad3aVLHt22cUpFY0O8f7T8jzDvL8TVao6ZJBK1W8S/ybRk3s7foqyRgavdufzKF8eTmxPdVQevpkku/nsy7AdTb8/obpTjQ0sqXh+GQqfEXYf8ttFVyo+9MfjA9mw1G6VkMM0jjJSkHYPm+P5O2WgfllWW6FuBKd+1TkzRyN4KKwq0XPe+gffSvtTRU9ieOpG8bk/ZBabZeRENgMjiuezMTuNWYBm4/lsS3O4wLYDx50emXOuNGWh/H3hIL/wN0qcY7c++IW8T50t8mR2niTspgf7JB5l2TKPl2TZ/Zwf5v2rHflo0u1OiuJidrFSZg9/fxHgb4l/7+k2a7wnt9r7LQiScTSfkflgMe5nh5jM4xm0LdbJYkYOGT9lzFdqZdmxNOPppLT1tt+ncaKfiIUGo9OM7Ff5Lmmz4pJOUd6fbZL5x+Ul1b4PSxVfOSL9JkK2ETXYnD7bYZr20iBsb/PjZpVU9j+yKItitl21jPrH0eK47I/LpbmpGCU7pdR/5bsYbyI0hodWr73fDJPBqNsdDbKDo3cMxzbbi+Mm65KKsv5uQPKPJF8Uj8yrq445rZd+D+ZNhOG5d6xuWBHi+lSh5Ya65tj2Ol9ezSiJSB+jSDT+vt7copFGF02DqnrX70SVp4cLbaezPN8Wbtj1TcMJjPY0P8ab1SFLmA7j+LT1rg+ns1ixeSmvfxehf7rrZSbXsdSF5NwwHI/tBxia6d+6FGd122UX1dt+68tPp/NVUl1xLCsVTaDZVsDxtZ/aeOOvmdH8i644t/213W7XXy0toAm3qNc348fy4D/09t9rs1zUc5am7ZJXv0zzr/8inea8+m2hf53wdSlC+aUI5ZcilF+KUH4pQvmlCOWXIpRfilB+KUL5pQjllyKUX4pQfilC+aUI5ZcilF+KUH4pQvmlCOWXIpRfilB+KUL5pQjllyKUX4pQfilC+aUI5ZcilF+KUH4pQvmlCOWXIpRfilB+KUL59Z8n/B9/6tp2LMMyWAAAAABJRU5ErkJggg==" 
              alt="Hamleys Logo" 
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Offer Title */}
          <h2 className="text-center text-xl font-bold mb-2 pt-12">
            GET 20% OFF on Shopping Above ₹999! [Hamleys]
          </h2>

          {/* Validity */}
          <p className="text-center text-gray-600 text-sm mb-4">
            Valid Till: [Enter End Date]
          </p>

        

          {/* Divider */}
          <hr className="my-4 border-gray-200" />
        <StepsToRedeem/>
        <MoreOffers/>
          
        </div>
        
  );
};

export default OfferCard;