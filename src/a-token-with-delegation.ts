import {
  Approval as ApprovalEvent,
  BalanceTransfer as BalanceTransferEvent,
  Burn as BurnEvent,
  DelegateChanged as DelegateChangedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  Initialized as InitializedEvent,
  Mint as MintEvent,
  Transfer as TransferEvent
} from "../generated/ATokenWithDelegation/ATokenWithDelegation"
import {
  Approval,
  BalanceTransfer,
  Burn,
  DelegateChanged,
  EIP712DomainChanged,
  Initialized,
  Mint,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBalanceTransfer(event: BalanceTransferEvent): void {
  let entity = new BalanceTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.target = event.params.target
  entity.value = event.params.value
  entity.balanceIncrease = event.params.balanceIncrease
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegator = event.params.delegator
  entity.delegatee = event.params.delegatee
  entity.delegationType = event.params.delegationType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.underlyingAsset = event.params.underlyingAsset
  entity.pool = event.params.pool
  entity.treasury = event.params.treasury
  entity.incentivesController = event.params.incentivesController
  entity.aTokenDecimals = event.params.aTokenDecimals
  entity.aTokenName = event.params.aTokenName
  entity.aTokenSymbol = event.params.aTokenSymbol
  entity.params = event.params.params

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.onBehalfOf = event.params.onBehalfOf
  entity.value = event.params.value
  entity.balanceIncrease = event.params.balanceIncrease
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
