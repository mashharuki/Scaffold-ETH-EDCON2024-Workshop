import { Contract } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

/**
 * デプロイ用のスクリプト
 * @param hre 
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("YourContract", {
    from: deployer,
    args: [], // NOTE: we removed the argument
    log: true,
    autoMine: true,
  });
  
  // transfer Ownership
  const YourContract = (await hre.ethers.getContract("YourContract", deployer)) as Contract;
  await YourContract.transferOwnership("0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072");
};

export default deployYourContract;

deployYourContract.tags = ["YourContract"];