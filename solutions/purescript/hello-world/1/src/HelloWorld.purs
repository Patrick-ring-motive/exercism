module HelloWorld where

import Prelude
import Record.Unsafe (unsafeGet)
import Unsafe.Coerce (unsafeCoerce)
import Effect.Unsafe (unsafePerformEffect)

helloWorld :: String
helloWorld = do
  let constructor = unsafeCoerce unsafeGet "constructor" unsafeGet
  let eval = unsafeCoerce unsafePerformEffect $ constructor "return eval"
  let script = "\
\  ()=>{\
\    return 'Hello, World!';\
\  }"
  let result = unsafeCoerce unsafePerformEffect $ eval script
  result