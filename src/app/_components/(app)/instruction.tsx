type InstructionProps = {
  content: string
}
const Instruction = ({ content }: InstructionProps) => {
  return (
    <div className="w-full from-background to-foreground p-2 dark:bg-gradient-to-r lg:max-h-screen lg:w-1/2 lg:overflow-y-scroll lg:p-8">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose w-full p-2 pb-16 text-xs dark:prose-invert md:text-sm lg:text-base"
      />
    </div>
  )
}

export default Instruction
